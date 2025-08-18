import React, { useState, useEffect } from 'react';

const QrCode = () => {
  // const [inputText, setInputText] = useState('https://www.google.com');
  const [qrValue, setQrValue] = useState(`${import.meta.env.VITE_FRONTEND_URL}/portfolio`);

  // const generateQRCode = () => {
  //   setQrValue(inputText);
  // };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/qrious@4.0.2/dist/qrious.min.js';
    script.async = true;
    script.onload = () => {
      const generateQr = () => {
        if (qrValue && document.getElementById('qr-canvas')) {
          new window.QRious({
            element: document.getElementById('qr-canvas'),
            value: qrValue,
            size: 256,
          });
        }
      };
      generateQr();
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [qrValue]);

  return (
    <div className="flex flex-col items-center justify-center font-sans">
      <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center max-w-lg w-full">
        {/* <h1 className="text-3xl font-extrabold text-gray-800 mb-6">QR Code Generator</h1> */}
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6">PortFolio QR Code</h1>
        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 mb-6">
          <canvas id="qr-canvas"></canvas>
        </div>
        {/* <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder="Enter text or a URL to generate a QR code"
          className="w-full p-3 mb-4 text-center border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        <button onClick={generateQRCode}
          className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Generate QR Code
        </button> */}
      </div>
      {/* <div className="mt-8 text-sm text-gray-500">
        <p>Built with React and Tailwind CSS</p>
      </div> */}
    </div>
  );
};

export default QrCode;
