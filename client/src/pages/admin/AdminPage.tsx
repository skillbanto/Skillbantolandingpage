import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageEditor from '../../components/admin/PageEditor';
import { Button } from '../../components/ui/button';
import { apiRequest } from '../../lib/queryClient';

interface Page {
  id: number;
  title: string;
  slug: string;
  content: string;
  published: boolean;
}

const AdminPage: React.FC = () => {
  const { pageId } = useParams<{ pageId: string }>();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPage, setSelectedPage] = useState<any>(null);
  const [pages, setPages] = useState<Page[]>([]);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    // Setup default pages if the database is empty
    const setupDefaultPages = async () => {
      setIsLoading(true);
      
      try {
        const response = await fetch('/api/pages');
        const data = await response.json();
        
        if (Array.isArray(data) && data.length === 0) {
          // Create default pages
          const defaultPages = [
            { title: 'Home Page', slug: 'home', content: [], published: true },
            { title: 'Courses Page', slug: 'courses', content: [], published: true },
            { title: 'Products Page', slug: 'products', content: [], published: true },
            { title: 'Resources Page', slug: 'resources', content: [], published: true },
            { title: 'Pricing Page', slug: 'pricing', content: [], published: true }
          ];
          
          for (const page of defaultPages) {
            await apiRequest('POST', '/api/pages', page);
          }
          
          // Fetch again after creating
          const newResponse = await fetch('/api/pages');
          const newData = await newResponse.json();
          setPages(newData);
        } else {
          setPages(data);
        }
      } catch (err) {
        console.error('Error setting up pages:', err);
        setError('Failed to load pages. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };
    
    setupDefaultPages();
  }, []);
  
  useEffect(() => {
    // Fetch the selected page when pageId changes
    const fetchPage = async () => {
      if (!pageId) return;
      
      setIsLoading(true);
      try {
        const response = await fetch(`/api/pages/by-slug/${pageId}`);
        if (response.ok) {
          const pageData = await response.json();
          setSelectedPage(pageData);
        } else {
          setError(`Failed to load page: ${pageId}`);
        }
      } catch (err) {
        console.error('Error fetching page:', err);
        setError('Failed to load the page. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchPage();
  }, [pageId]);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900">Admin Dashboard</h1>
          <Link to="/">
            <Button variant="outline">Return to Site</Button>
          </Link>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {isLoading ? (
          <div className="text-center py-10">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading...</p>
          </div>
        ) : error ? (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            <p>{error}</p>
            <button 
              className="mt-2 underline"
              onClick={() => setError(null)}
            >
              Try again
            </button>
          </div>
        ) : pageId ? (
          <PageEditor 
            pageId={pageId} 
            initialContent={Array.isArray(selectedPage?.content) ? selectedPage.content : []}
            pageTitle={selectedPage?.title || 'Untitled Page'}
          />
        ) : (
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium mb-4">Select a page to edit</h2>
            <div className="space-y-2">
              <Link 
                to="/admin/home" 
                className="block p-3 border rounded hover:bg-gray-50 transition-colors"
              >
                Home Page
              </Link>
              <Link 
                to="/admin/courses" 
                className="block p-3 border rounded hover:bg-gray-50 transition-colors"
              >
                Courses Page
              </Link>
              <Link 
                to="/admin/products" 
                className="block p-3 border rounded hover:bg-gray-50 transition-colors"
              >
                Products Page
              </Link>
              <Link 
                to="/admin/resources" 
                className="block p-3 border rounded hover:bg-gray-50 transition-colors"
              >
                Resources Page
              </Link>
              <Link 
                to="/admin/pricing" 
                className="block p-3 border rounded hover:bg-gray-50 transition-colors"
              >
                Pricing Page
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminPage;