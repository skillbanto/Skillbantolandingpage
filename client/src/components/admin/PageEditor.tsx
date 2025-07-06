import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';

interface EditorBlockProps {
  id: string;
  type: 'text' | 'heading' | 'image' | 'video';
  content: string;
  onUpdate: (id: string, content: string) => void;
  onDelete: (id: string) => void;
  onMoveUp: (id: string) => void;
  onMoveDown: (id: string) => void;
}

const EditorBlock: React.FC<EditorBlockProps> = ({ 
  id, 
  type, 
  content, 
  onUpdate, 
  onDelete, 
  onMoveUp, 
  onMoveDown 
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentContent, setCurrentContent] = useState(content);
  const inputRef = useRef<HTMLTextAreaElement | HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleSave = () => {
    onUpdate(id, currentContent);
    setIsEditing(false);
  };

  const renderEditor = () => {
    if (isEditing) {
      if (type === 'text') {
        return (
          <textarea
            ref={inputRef as React.RefObject<HTMLTextAreaElement>}
            className="w-full p-2 border border-gray-300 rounded-md min-h-[100px]"
            value={currentContent}
            onChange={(e) => setCurrentContent(e.target.value)}
          />
        );
      } else if (type === 'heading') {
        return (
          <input
            ref={inputRef as React.RefObject<HTMLInputElement>}
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md text-xl font-bold"
            value={currentContent}
            onChange={(e) => setCurrentContent(e.target.value)}
          />
        );
      } else if (type === 'image') {
        return (
          <div className="space-y-2">
            <input
              ref={inputRef as React.RefObject<HTMLInputElement>}
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={currentContent}
              onChange={(e) => setCurrentContent(e.target.value)}
              placeholder="Enter image URL"
            />
            <div className="text-sm text-gray-500">
              Enter the URL of the image or upload using the button below
            </div>
            <button
              className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm"
              onClick={() => alert('File upload functionality would be implemented here')}
            >
              Upload Image
            </button>
          </div>
        );
      } else if (type === 'video') {
        return (
          <div className="space-y-2">
            <input
              ref={inputRef as React.RefObject<HTMLInputElement>}
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={currentContent}
              onChange={(e) => setCurrentContent(e.target.value)}
              placeholder="Enter video embed URL (YouTube, Vimeo, etc.)"
            />
            <div className="text-sm text-gray-500">
              Enter the embed URL of the video (e.g., YouTube embed URL)
            </div>
          </div>
        );
      }
    }

    // Display mode
    if (type === 'text') {
      return <div className="prose max-w-none">{content}</div>;
    } else if (type === 'heading') {
      return <h2 className="text-2xl font-bold">{content}</h2>;
    } else if (type === 'image') {
      return (
        <div>
          <img src={content} alt="Content" className="max-w-full rounded-lg" />
        </div>
      );
    } else if (type === 'video') {
      return (
        <div className="aspect-video">
          <iframe
            src={content}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4 mb-4 bg-white relative group">
      <div className="absolute right-2 top-2 flex space-x-1 bg-white shadow-sm rounded-md p-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <button 
          className="p-1 hover:bg-gray-100 rounded" 
          onClick={() => setIsEditing(true)}
          title="Edit"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
        </button>
        <button 
          className="p-1 hover:bg-gray-100 rounded" 
          onClick={() => onDelete(id)}
          title="Delete"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </button>
        <button 
          className="p-1 hover:bg-gray-100 rounded" 
          onClick={() => onMoveUp(id)}
          title="Move Up"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
        </button>
        <button 
          className="p-1 hover:bg-gray-100 rounded" 
          onClick={() => onMoveDown(id)}
          title="Move Down"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      
      <div className="p-1">
        <div className="text-xs text-gray-400 mb-1">{type.toUpperCase()}</div>
        {renderEditor()}
      </div>
      
      {isEditing && (
        <div className="mt-3 flex justify-end space-x-2">
          <button
            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
          <button
            className="px-3 py-1 bg-primary text-white hover:bg-primary/90 rounded text-sm"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

interface PageEditorProps {
  pageId: string;
  pageTitle: string;
  initialContent?: Array<{
    id: string;
    type: 'text' | 'heading' | 'image' | 'video';
    content: string;
  }>;
}

const PageEditor: React.FC<PageEditorProps> = ({ pageId, pageTitle, initialContent = [] }) => {
  const [blocks, setBlocks] = useState(initialContent);
  const [isDragging, setIsDragging] = useState(false);
  const [isEditorEnabled, setIsEditorEnabled] = useState(true); // Start with editor enabled
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [draggedElement, setDraggedElement] = useState<HTMLElement | null>(null);

  const generateId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  const addBlock = (type: 'text' | 'heading' | 'image' | 'video') => {
    let defaultContent = '';
    
    switch(type) {
      case 'text':
        defaultContent = 'Enter your text here';
        break;
      case 'heading':
        defaultContent = 'New Heading';
        break;
      case 'image':
        defaultContent = 'https://via.placeholder.com/600x400';
        break;
      case 'video':
        defaultContent = 'https://www.youtube.com/embed/dQw4w9WgXcQ';
        break;
    }
    
    const newBlock = {
      id: generateId(),
      type,
      content: defaultContent
    };
    
    setBlocks([...blocks, newBlock]);
  };

  const updateBlock = (id: string, content: string) => {
    setBlocks(blocks.map(block => 
      block.id === id ? { ...block, content } : block
    ));
  };

  const deleteBlock = (id: string) => {
    setBlocks(blocks.filter(block => block.id !== id));
  };

  const moveBlockUp = (id: string) => {
    const index = blocks.findIndex(block => block.id === id);
    if (index > 0) {
      const newBlocks = [...blocks];
      const temp = newBlocks[index];
      newBlocks[index] = newBlocks[index - 1];
      newBlocks[index - 1] = temp;
      setBlocks(newBlocks);
    }
  };

  const moveBlockDown = (id: string) => {
    const index = blocks.findIndex(block => block.id === id);
    if (index < blocks.length - 1) {
      const newBlocks = [...blocks];
      const temp = newBlocks[index];
      newBlocks[index] = newBlocks[index + 1];
      newBlocks[index + 1] = temp;
      setBlocks(newBlocks);
    }
  };

  const handleSavePage = async () => {
    try {
      setIsSaving(true);
      setSaveStatus('idle');
      
      // Get the page by slug first
      const pageResponse = await fetch(`/api/pages/by-slug/${pageId}`);
      
      if (!pageResponse.ok) {
        throw new Error('Failed to get page information');
      }
      
      const pageData = await pageResponse.json();
      
      // Update the page content
      const response = await fetch(`/api/pages/${pageData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: blocks,
          published: false,
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to save page');
      }
      
      setSaveStatus('success');
      alert('Page saved successfully!');
    } catch (error) {
      console.error('Error saving page:', error);
      setSaveStatus('error');
      alert(`Error saving page: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsSaving(false);
    }
  };

  const handlePublishPage = async () => {
    try {
      setIsSaving(true);
      setSaveStatus('idle');
      
      // Get the page by slug first
      const pageResponse = await fetch(`/api/pages/by-slug/${pageId}`);
      
      if (!pageResponse.ok) {
        throw new Error('Failed to get page information');
      }
      
      const pageData = await pageResponse.json();
      
      // Update the page content and publish it
      const response = await fetch(`/api/pages/${pageData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: blocks,
          published: true,
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to publish page');
      }
      
      setSaveStatus('success');
      alert('Page published successfully!');
    } catch (error) {
      console.error('Error publishing page:', error);
      setSaveStatus('error');
      alert(`Error publishing page: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="relative">
      {!isEditorEnabled && (
        <div className="fixed bottom-4 right-4 z-10">
          <button
            className="bg-primary text-white px-4 py-2 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
            onClick={() => setIsEditorEnabled(true)}
          >
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
              Edit Page
            </div>
          </button>
        </div>
      )}

      {isEditorEnabled && (
        <div className="fixed inset-0 z-50 bg-white bg-opacity-95 overflow-y-auto">
          <div className="container mx-auto p-4">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">Page Editor</h1>
              <div className="flex space-x-2">
                <button
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
                  onClick={() => setIsEditorEnabled(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded"
                  onClick={handleSavePage}
                  disabled={isSaving}
                >
                  {isSaving ? 'Saving...' : 'Save Draft'}
                </button>
                <button
                  className="px-4 py-2 bg-green-500 text-white hover:bg-green-600 rounded"
                  onClick={handlePublishPage}
                  disabled={isSaving}
                >
                  {isSaving ? 'Publishing...' : 'Publish'}
                </button>
              </div>
            </div>

            <div className="mb-6 bg-gray-100 p-4 rounded-lg flex flex-wrap gap-2">
              <div className="text-gray-700 mr-2 flex items-center">Add Content:</div>
              <button
                className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm"
                onClick={() => addBlock('heading')}
              >
                Heading
              </button>
              <button
                className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm"
                onClick={() => addBlock('text')}
              >
                Text
              </button>
              <button
                className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm"
                onClick={() => addBlock('image')}
              >
                Image
              </button>
              <button
                className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm"
                onClick={() => addBlock('video')}
              >
                Video
              </button>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg min-h-screen">
              {blocks.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  <div className="text-2xl mb-2">This page is empty</div>
                  <div className="mb-4">Add some content blocks to get started</div>
                  <div className="flex justify-center space-x-2">
                    <button
                      className="px-4 py-2 bg-primary text-white hover:bg-primary/90 rounded"
                      onClick={() => addBlock('heading')}
                    >
                      Add Heading
                    </button>
                    <button
                      className="px-4 py-2 bg-primary text-white hover:bg-primary/90 rounded"
                      onClick={() => addBlock('text')}
                    >
                      Add Text
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  {blocks.map((block) => (
                    <EditorBlock
                      key={block.id}
                      id={block.id}
                      type={block.type}
                      content={block.content}
                      onUpdate={updateBlock}
                      onDelete={deleteBlock}
                      onMoveUp={moveBlockUp}
                      onMoveDown={moveBlockDown}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PageEditor;