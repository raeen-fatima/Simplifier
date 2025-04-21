import React, { useState } from "react";

const TextGrid = ({ originalText, simplifiedText, translatedText }) => {
  const [copiedText, setCopiedText] = useState(""); // State to track which text was copied

  // Function to reset copied state after 2 seconds
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text) // Use native Clipboard API for copying
      .then(() => {
        setCopiedText(text);
        setTimeout(() => setCopiedText(""), 2000); // Reset after 2 seconds
      })
      .catch((error) => console.error("Clipboard write failed", error));
  };

  return (
    <div className="mt-10 w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-10 px-4 font-alegreya">
      {/* Original Text */}
      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-300 relative overflow-hidden">
        <h3 className="text-2xl font-semibold mb-4 text-gray-900 flex items-center">
          {/* Replacing React Icon with a simple emoji */}
          📝 Original Text
        </h3>
        <textarea
          className="w-full p-4 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-700 mb-4 resize-none"
          value={originalText}
          readOnly
          rows={6}
        />
        <button
          onClick={() => handleCopy(originalText)}
          className="absolute top-4 right-4 px-2 py-1 bg-slate-400 text-white rounded-md text-sm hover:bg-slate-600 transition duration-200"
        >
          {copiedText === originalText ? "Copied" : "Copy"}
        </button>
      </div>

      {/* Simplified Text */}
      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-300 relative overflow-hidden">
        <h3 className="text-2xl font-semibold mb-4 text-gray-900 flex items-center">
          {/* Replacing React Icon with a simple emoji */}
          ✨ Simplified Text
        </h3>
        <textarea
          className="w-full p-4 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-700 mb-4 resize-none"
          value={simplifiedText}
          readOnly
          rows={6}
        />
        <button
          onClick={() => handleCopy(simplifiedText)}
          className="absolute top-4 right-4 px-3 py-1 bg-slate-400 text-white rounded-md text-sm hover:bg-slate-600 transition duration-200"
        >
          {copiedText === simplifiedText ? "Copied" : "Copy"}
        </button>
      </div>

      {/* Translated Text */}
      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-300 relative overflow-hidden">
        <h3 className="text-2xl font-semibold mb-4 text-gray-900 flex items-center">
          {/* Replacing React Icon with a simple emoji */}
          🌍 Translated Text
        </h3>
        <textarea
          className="w-full p-4 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-700 mb-4 resize-none"
          value={translatedText}
          readOnly
          rows={6}
        />
        <button
          onClick={() => handleCopy(translatedText)}
          className="absolute top-4 right-4 px-3 py-1 bg-slate-400 text-white rounded-md text-sm hover:bg-slate-600 transition duration-200"
        >
          {copiedText === translatedText ? "Copied" : "Copy"}
        </button>
      </div>
    </div>
  );
};

export default TextGrid;
