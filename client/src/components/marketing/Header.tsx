import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SignupDialog from "../SignupDialog";
import skillbantoLogo from "../../assets/skillbanto-logo.png";

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

// Main navigation items
const mainNavItems = [
  { label: "Products", href: "/products", hasDropdown: true },
  { label: "Resources", href: "/resources", hasDropdown: true },
  { label: "Pricing", href: "/pricing" }
];

// Product dropdown items
const productItems = [
  { label: "Course Creation", href: "/products/course-creation" },
  { label: "Marketing Tools", href: "/products/marketing-tools" },
  { label: "Sales & Payments", href: "/products/sales-payments" },
  { label: "Student Management", href: "/products/student-management" }
];

// Resource dropdown items
const resourceItems = [
  { label: "Help Center", href: "/resources/help-center" },
  { label: "Blog", href: "/resources/blog" },
  { label: "Case Studies", href: "/resources/case-studies" },
  { label: "Community", href: "/resources/community" }
];

const Header = ({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [signupDialogOpen, setSignupDialogOpen] = useState(false);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Determine active section based on scroll position
      const sections = ["cta", "pricing", "features", "hero"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Smooth scroll to section when clicking on nav items
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      
      // Close mobile menu if open
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <>
      <header className={`${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white/90 backdrop-blur-sm'} w-full h-20 flex items-center transition-all duration-300 fixed top-0 left-0 right-0 z-50 border-b border-gray-100 overflow-visible`}>
        <div className="container-wide flex items-center justify-between w-full">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={skillbantoLogo} 
              alt="SkillBanto" 
              className="h-8 w-40 sm:h-8 sm:w-40 md:h-8 md:w-40 lg:h-8 lg:w-40 xl:h-8 xl:w-48 transition-all duration-300 object-contain"
              style={{
                filter: 'drop-shadow(0 0 0 transparent)',
                mixBlendMode: 'multiply'
              }}
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center space-x-6 mx-auto">
            {mainNavItems.map((item, index) => {
              const sectionId = item.href.split('#')[1] || "";
              const isActive = activeSection === sectionId;
              
              if (item.label === "Products") {
                return (
                  <div key={item.label} className="relative group">
                    <button 
                      className="flex items-center space-x-1 text-base font-medium text-gray-700 hover:text-primary transition-colors px-1 py-2"
                      onClick={() => setIsProductsOpen(!isProductsOpen)}
                      onMouseEnter={() => setIsProductsOpen(true)}
                      onMouseLeave={() => setIsProductsOpen(false)}
                    >
                      <span>{item.label}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    
                    <div 
                      className={`absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 transition-all duration-200 ${isProductsOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                      onMouseEnter={() => setIsProductsOpen(true)}
                      onMouseLeave={() => setIsProductsOpen(false)}
                    >
                      <div className="py-1">
                        {productItems.map((item) => (
                          <Link
                            key={item.label}
                            to={item.href}
                            onClick={() => setIsProductsOpen(false)}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              } else if (item.label === "Resources") {
                return (
                  <div key={item.label} className="relative group">
                    <button 
                      className="flex items-center space-x-1 text-base font-medium text-gray-700 hover:text-primary transition-colors px-1 py-2"
                      onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                      onMouseEnter={() => setIsResourcesOpen(true)}
                      onMouseLeave={() => setIsResourcesOpen(false)}
                    >
                      <span>{item.label}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    
                    <div 
                      className={`absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 transition-all duration-200 ${isResourcesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                      onMouseEnter={() => setIsResourcesOpen(true)}
                      onMouseLeave={() => setIsResourcesOpen(false)}
                    >
                      <div className="py-1">
                        {resourceItems.map((item) => (
                          <Link
                            key={item.label}
                            to={item.href}
                            onClick={() => setIsResourcesOpen(false)}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              } else if (item.label === "Pricing") {
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`text-base font-medium text-gray-700 hover:text-primary transition-colors px-1 py-2`}
                  >
                    {item.label}
                  </Link>
                );
              } else {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      const sectionId = item.href.split('#')[1] || "";
                      if (sectionId) scrollToSection(e, sectionId);
                    }}
                    className={`text-base font-medium ${isActive ? 'text-primary' : 'text-gray-700'} hover:text-primary transition-colors px-1 py-2`}
                  >
                    {item.label}
                  </a>
                );
              }
            })}
          </nav>

          {/* CTA Buttons - Far Right */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="https://app.skillbanto.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-medium text-gray-700 hover:text-primary transition-colors px-4 py-2"
            >
              Login
            </a>
            <a
              href="https://app.skillbanto.com/creator-registration"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-primary to-indigo-600 text-white rounded-full px-6 py-2.5 text-base font-medium hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 flex items-center gap-2"
            >
              Get Started
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center z-10 mr-6"
            onClick={() => setMobileMenuOpen(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Space for fixed header */}
      <div className="h-[72px]"></div>

      {/* Mobile Menu */}
      <div 
        className={`mobile-menu ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div 
          className={`mobile-menu-inner ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between p-6 border-b">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent">SkillBanto</span>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 -mr-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="p-6 flex flex-col space-y-6">
            {mainNavItems.map((item) => {
              const sectionId = item.href.split('#')[1] || "";
              
              if (item.label === "Products") {
                return (
                  <div key={item.label} className="flex flex-col space-y-4">
                    <h3 className="text-sm font-semibold text-gray-900">{item.label}</h3>
                    <div className="pl-4 flex flex-col space-y-3">
                      {productItems.map((product) => (
                        <Link
                          key={product.label}
                          to={product.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-base text-gray-700 hover:text-primary"
                        >
                          {product.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              } else if (item.label === "Resources") {
                return (
                  <div key={item.label} className="flex flex-col space-y-4">
                    <h3 className="text-sm font-semibold text-gray-900">{item.label}</h3>
                    <div className="pl-4 flex flex-col space-y-3">
                      {resourceItems.map((resource) => (
                        <Link
                          key={resource.label}
                          to={resource.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-base text-gray-700 hover:text-primary"
                        >
                          {resource.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              } else if (item.label === "About" || item.label === "Pricing") {
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-base font-medium text-gray-900 hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              } else {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      if (sectionId) {
                        scrollToSection(e, sectionId);
                      }
                      // Don't prevent default for external links
                    }}
                    className="text-base font-medium text-gray-900 hover:text-primary"
                  >
                    {item.label}
                  </a>
                );
              }
            })}

            <hr />

            <div className="flex flex-col space-y-4">
              <a href="https://app.skillbanto.com/login" target="_blank" rel="noopener noreferrer" className="text-base font-medium text-gray-900 hover:text-primary">
                Login
              </a>
              <a 
                href="https://app.skillbanto.com/creator-registration"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-primary to-indigo-600 text-white rounded-full px-6 py-2.5 text-base font-medium hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 text-center flex items-center justify-center gap-2"
              >
                Get Started
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Signup Dialog */}
      <SignupDialog 
        isOpen={signupDialogOpen} 
        onClose={() => setSignupDialogOpen(false)} 
      />
    </>
  );
};

export default Header;