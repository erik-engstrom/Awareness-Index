import React, { useState, useEffect, useCallback } from 'react';

interface ExternalLinkWarningProps {
  url: string;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ExternalLinkWarning: React.FC<ExternalLinkWarningProps> = ({
  url,
  isOpen,
  onClose,
  onConfirm,
}) => {
  const [domain, setDomain] = useState('');

  useEffect(() => {
    try {
      const urlObj = new URL(url);
      setDomain(urlObj.hostname);
    } catch (e) {
      setDomain(url);
    }
  }, [url]);

  // Close on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    },
    [isOpen, onClose]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 px-4 transition-opacity duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby="external-link-title"
    >
      <div className="bg-gray-900 rounded-lg p-6 max-w-md w-full border border-indigo-800 shadow-2xl transform transition-all duration-300 scale-100 opacity-100">
        <div className="text-center mb-4">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 id="external-link-title" className="text-lg font-medium leading-6 text-white">External Link Notice</h3>
        </div>
        <div className="mt-2">
          <p className="text-sm text-gray-300">
            You are leaving The Awareness Index to visit an external site:
          </p>
          <p className="text-amber-300 font-semibold mt-2">{domain}</p>
          <p className="text-xs text-gray-400 mt-4">
            We do not control or endorse the content on external websites.
            Please exercise your own discernment when exploring consciousness-related resources.
          </p>
        </div>
        <div className="mt-6 flex justify-between space-x-4">
          <button
            type="button"
            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-300 border border-gray-600 rounded-md hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="button"
            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
            onClick={onConfirm}
          >
            Continue to Site
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExternalLinkWarning;