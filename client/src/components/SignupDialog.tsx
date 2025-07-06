import { X, ExternalLink } from "lucide-react";
import { SIGNUP_URL, LOGIN_URL } from "../lib/externalUrls";

interface SignupDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignupDialog = ({ isOpen, onClose }: SignupDialogProps) => {
  if (!isOpen) return null;

  const handleRedirectToSignup = () => {
    // Open the external signup URL in a new tab
    window.open(SIGNUP_URL, "_blank");
    // Close the dialog
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-0">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      {/* Dialog */}
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md relative z-10 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent">
            Join SkillBanto
          </h3>
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6 text-center">
          <div className="mb-6 space-y-3">
            <h4 className="text-lg font-medium text-gray-900">Create Your Account</h4>
            <p className="text-gray-600">
              Create your SkillBanto account to start building and selling courses online.
            </p>
            <p className="text-gray-600">
              You'll be redirected to our registration page where you can set up your account with a 3-day free trial.
            </p>
          </div>
          
          <button
            onClick={handleRedirectToSignup}
            className="w-full py-3 px-4 flex items-center justify-center bg-gradient-to-r from-primary to-indigo-600 text-white font-medium rounded-md shadow hover:shadow-lg hover:shadow-primary/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300"
          >
            Continue to Registration
            <ExternalLink className="ml-2 h-4 w-4" />
          </button>
          
          <p className="text-center text-sm text-gray-500 mt-4">
            Already have an account? <a href={LOGIN_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupDialog;