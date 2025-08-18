import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

// Main ShareComponent that provides sharing options.
const ShareComponent = () => {
  const [pageUrl, setPageUrl] = useState('');
  const [pageTitle, setPageTitle] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // useEffect hook to get the page URL and title once when the component mounts.
  useEffect(() => {
    // Check if window and document are available (for client-side rendering).
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      setPageUrl(window.location.href);
      setPageTitle(document.title);
    }
  }, []); // Empty dependency array ensures this runs only once.

  // Function to handle native Web Share API.
  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: pageTitle,
          url: pageUrl,
        });
        console.log('Page shared successfully');
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // If native sharing is not supported, show the dropdown with fallback options.
      setShowDropdown(true);
    }
  };

  // Function to copy the URL to the clipboard.
  const handleCopyLink = () => {
    // The `execCommand` method is used for clipboard operations as `navigator.clipboard.writeText`
    // may be restricted in some environments (like iframes).
    const el = document.createElement('textarea');
    el.value = pageUrl;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // Reset the 'copied' state after 2 seconds.
  };

  // Generate a Twitter share URL.
  const getTwitterShareUrl = () => {
    const text = encodeURIComponent(`Check out this page: ${pageTitle}`);
    const url = encodeURIComponent(pageUrl);
    return `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
  };

  // Generate a Facebook share URL.
  const getFacebookShareUrl = () => {
    const url = encodeURIComponent(pageUrl);
    return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  };

  // Generate a LinkedIn share URL.
  const getLinkedinShareUrl = () => {
    const url = encodeURIComponent(pageUrl);
    const title = encodeURIComponent(pageTitle);
    return `https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}`;
  };

  // A component for the main share icon.
  const ShareIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
      <polyline points="16 6 12 2 8 6"></polyline>
      <line x1="12" y1="2" x2="12" y2="15"></line>
    </svg>
  );

  // A component for the Twitter icon.
  const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
    </svg>
  );

  // A component for the Facebook icon.
  const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  );

  // A component for the LinkedIn icon.
  const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );

  // A component for the Link icon.
  const LinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </svg>
  );

  return (
    <div className="flex justify-center items-center rounded-2xl shadow-xl bg-gray-100 font-sans">
      <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center max-w-sm w-full">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">Share This Page</h1>

        {/* The main button to trigger sharing */}
        <button
          onClick={handleNativeShare}
          className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        >
          <ShareIcon />
          <span>Share</span>
        </button>

        {/* Dropdown for fallback options */}
        {showDropdown && (
          <div className="w-full space-y-2 mb-4">
            <a
              href={getTwitterShareUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-500 transition duration-300 focus:outline-none"
            >
              <TwitterIcon />
              <span>Share on Twitter</span>
            </a>
            <a
              href={getFacebookShareUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 focus:outline-none"
            >
              <FacebookIcon />
              <span>Share on Facebook</span>
            </a>
            <a
              href={getLinkedinShareUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-900 transition duration-300 focus:outline-none"
            >
              <LinkedinIcon />
              <span>Share on LinkedIn</span>
            </a>
          </div>
        )}

        {/* Button to copy the link */}
        <button
          onClick={handleCopyLink}
          className="w-full flex items-center justify-center space-x-2 bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-400 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          <LinkIcon />
          <span>{isCopied ? 'Link Copied!' : 'Copy Link'}</span>
          {isCopied ? toast.success("Copied to Clipboard"):""}
        </button>
      </div>
    </div>
  );
};

export default ShareComponent;
