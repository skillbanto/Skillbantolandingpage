import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, X, FileText, Book, MessageCircle, 
  ShoppingCart, HelpCircle 
} from 'lucide-react';

interface QuickAction {
  id: string;
  label: string;
  icon: React.ReactNode;
  href: string;
  bgColor: string;
}

const quickActions: QuickAction[] = [
  {
    id: 'courses',
    label: 'Explore Courses',
    icon: <Book size={18} />,
    href: '/courses',
    bgColor: 'bg-green-500 hover:bg-green-600'
  },
  {
    id: 'resources',
    label: 'Resources',
    icon: <FileText size={18} />,
    href: '/resources',
    bgColor: 'bg-blue-500 hover:bg-blue-600'
  },
  {
    id: 'support',
    label: 'Get Support',
    icon: <HelpCircle size={18} />,
    href: '/resources/help-center',
    bgColor: 'bg-purple-500 hover:bg-purple-600'
  },
  {
    id: 'contact',
    label: 'Contact Us',
    icon: <MessageCircle size={18} />,
    href: '/contact',
    bgColor: 'bg-pink-500 hover:bg-pink-600'
  },
  {
    id: 'pricing',
    label: 'View Pricing',
    icon: <ShoppingCart size={18} />,
    href: '/pricing',
    bgColor: 'bg-amber-500 hover:bg-amber-600'
  }
];

const QuickActionButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      {/* Background overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/20 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
      
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
        {/* Main button */}
        <motion.button
          className={`flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-lg text-white ${
            isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700'
          } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200`}
          onClick={toggleOpen}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05, boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)" }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          aria-label="Quick actions"
        >
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Plus size={20} className="sm:w-6 sm:h-6" />}
          </motion.div>
        </motion.button>

        {/* Action buttons */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="absolute bottom-20 right-0 flex flex-col items-end space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {quickActions.map((action, index) => (
                <motion.div
                  key={action.id}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.8 }}
                  transition={{ 
                    delay: index * 0.05, 
                    duration: 0.2,
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                  }}
                  className="flex items-center group"
                >
                  <motion.span 
                    className="mr-2 bg-white text-gray-800 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg shadow-md text-xs sm:text-sm font-medium hidden sm:block sm:opacity-0 sm:group-hover:opacity-100 sm:transition-opacity sm:duration-200"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 + 0.1 }}
                  >
                    {action.label}
                  </motion.span>
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to={action.href}
                      className={`flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full shadow-md text-white ${action.bgColor} focus:outline-none transition-all duration-200 hover:shadow-lg`}
                      aria-label={action.label}
                      onClick={() => setIsOpen(false)}
                    >
                      {action.icon}
                    </Link>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </React.Fragment>
  );
};

export default QuickActionButton;