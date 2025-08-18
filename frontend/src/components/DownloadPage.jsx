import React, { useState } from 'react';

const HTMLPageDownloader = () => {
    // State to manage the file name entered by the user.
    const [fileName, setFileName] = useState('your-portfolio.html');
    const [downloadMessage, setDownloadMessage] = useState('');

    // Function to create the HTML string with inline CSS and download it.
    const handleDownload = () => {
        // Get the full HTML content of the current page.
        const pageHTML = document.documentElement.outerHTML;

        // Create a new HTML string with the desired DOCTYPE and content.
        // We add some basic styling to ensure the page looks good when downloaded.
        const fullHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Downloaded Page</title>
  <style>
    body {
      font-family: 'Inter', sans-serif;
      margin: 20px;
      line-height: 1.6;
    }
  </style>
</head>
<body>
${pageHTML}
</body>
</html>`;

        // Create a Blob from the HTML string with 'text/html' MIME type.
        const blob = new Blob([fullHTML], { type: 'text/html' });

        // Create a temporary URL for the Blob.
        const url = URL.createObjectURL(blob);

        // Create a temporary anchor element to trigger the download.
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName || 'download.html'; // Use user's filename or default.

        // Append the link to the body, click it, and then remove it.
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Revoke the temporary URL to free up memory.
        URL.revokeObjectURL(url);

        // Set a message to inform the user the download has started.
        setDownloadMessage('Download started!');
        setTimeout(() => setDownloadMessage(''), 3000);
    };

    return (
        <div className="flex justify-center items-center bg-gray-100 font-sans">
            <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center max-w-sm w-full">
                <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">Download Page as HTML</h1>

                {/* Input field for the filename
                <input
                    type="text"
                    value={fileName}
                    onChange={(e) => setFileName(e.target.value)}
                    placeholder="Enter file name (e.g., page.html)"
                    className="w-full p-3 mb-4 text-center border-2 placeholder:text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                /> */}

                {/* Button to trigger the download */}
                <button
                    onClick={handleDownload}
                    className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Download Page
                </button>

                {/* Display a message after the download starts */}
                {downloadMessage && (
                    <p className="mt-4 text-green-600 font-medium">{downloadMessage}</p>
                )}
            </div>
        </div>
    );
};

export default HTMLPageDownloader;
