import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <div className="bg-white rounded-lg shadow-md w-full max-w-md mx-4 p-8">
        <div className="flex mb-4 gap-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <h1 className="text-2xl font-bold text-gray-900">404 Page Not Found</h1>
        </div>

        <p className="mt-4 text-gray-600 mb-6">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        
        <Link to="/" className="btn-primary w-full text-center block">
          Return to Home
        </Link>
      </div>
    </div>
  );
}
