import React, { ReactNode } from 'react';

export interface SectionInfo {
  id: string;
  label: string;
  color?: string;
}

interface SectionContextType {
  activeSection: string | null;
  setActiveSection: (id: string | null) => void;
  allSections: SectionInfo[];
  registerSection: (section: SectionInfo) => void;
  unregisterSection: (id: string) => void;
}

const SectionContext = React.createContext<SectionContextType | undefined>(undefined);

export const useSectionContext = () => {
  const context = React.useContext(SectionContext);
  if (!context) {
    return {
      activeSection: null,
      setActiveSection: () => {},
      allSections: [],
      registerSection: () => {},
      unregisterSection: () => {}
    };
  }
  return context;
};

interface SectionProviderProps {
  children: ReactNode;
}

export const SectionProvider: React.FC<SectionProviderProps> = ({ children }) => {
  const [activeSection, setActiveSection] = React.useState<string | null>(null);
  const [allSections, setAllSections] = React.useState<SectionInfo[]>([]);

  const registerSection = React.useCallback((section: SectionInfo) => {
    setAllSections(prev => {
      const exists = prev.some(s => s.id === section.id);
      if (!exists) {
        return [...prev, section];
      }
      return prev;
    });
  }, []);

  const unregisterSection = React.useCallback((id: string) => {
    setAllSections(prev => prev.filter(s => s.id !== id));
  }, []);

  return (
    <SectionContext.Provider value={{
      activeSection,
      setActiveSection,
      allSections,
      registerSection,
      unregisterSection
    }}>
      {children}
    </SectionContext.Provider>
  );
};

interface SectionTargetProps {
  id: string;
  label: string;
  color?: string;
  children: ReactNode;
  className?: string;
  threshold?: number;
}

export const SectionTarget: React.FC<SectionTargetProps> = ({
  id,
  label,
  color = '#4F46E5',
  children,
  className = '',
  threshold = 0.5,
}) => {
  const { setActiveSection, registerSection, unregisterSection } = useSectionContext();
  
  React.useEffect(() => {
    // Register section
    registerSection({ id, label, color });
    
    // Cleanup
    return () => {
      unregisterSection(id);
    };
  }, [id, label, color, registerSection, unregisterSection]);

  return (
    <section 
      id={id}
      className={className}
      data-section-id={id}
      data-section-label={label}
    >
      {children}
    </section>
  );
};

interface SectionIndicatorProps {
  position?: 'left' | 'right';
  showLabels?: boolean;
  highlightStyle?: 'dot' | 'bar' | 'glow';
  showConnector?: boolean;
}

export const SectionIndicator: React.FC<SectionIndicatorProps> = ({
  position = 'right',
  showLabels = true,
  highlightStyle = 'dot',
  showConnector = true
}) => {
  const { allSections, activeSection } = useSectionContext();

  if (allSections.length === 0) return null;

  return (
    <div 
      className={`fixed top-1/2 transform -translate-y-1/2 z-50 ${
        position === 'left' ? 'left-6' : 'right-6'
      }`}
    >
      <div className="flex flex-col space-y-4">
        {allSections.map((section, index) => (
          <div 
            key={section.id}
            className="flex items-center cursor-pointer group"
            onClick={() => {
              const element = document.getElementById(section.id);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            {showLabels && position === 'left' && (
              <span className="text-sm font-medium text-gray-600 mr-3 opacity-0 group-hover:opacity-100 transition-opacity">
                {section.label}
              </span>
            )}
            
            <div 
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                activeSection === section.id 
                  ? 'bg-blue-600 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              style={{
                backgroundColor: activeSection === section.id ? section.color : undefined
              }}
            />
            
            {showLabels && position === 'right' && (
              <span className="text-sm font-medium text-gray-600 ml-3 opacity-0 group-hover:opacity-100 transition-opacity">
                {section.label}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};