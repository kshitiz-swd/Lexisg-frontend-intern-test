'use client';

import React from 'react';

const PdfModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-50 bg-opacity-60 flex items-center justify-center px-4">
      <div className="bg-white p-6 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto relative">
        <h2 className="text-xl font-semibold mb-4 text-black">Dani Devi v. Pritam Singh – Mock PDF View</h2>
        
        <div className="space-y-4 text-sm text-gray-800">
          <p>Para 1: Lorem ipsum dolor sit amet...</p>
          <p>Para 2: Lorem ipsum dolor sit amet...</p>
          <p>Para 3: Lorem ipsum dolor sit amet...</p>
          <p>Para 4: Lorem ipsum dolor sit amet...</p>
          <p>Para 5: Lorem ipsum dolor sit amet...</p>
          <p>Para 6: Lorem ipsum dolor sit amet...</p>
          <p className="bg-yellow-200 font-semibold p-2 rounded">
            Para 7: “as the age of the deceased at the time of accident was held to be about 54–55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects.”
          </p>
          <p>Para 8: Therefore, the appeal is allowed...</p>
        </div>

        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-black hover:text-red-500"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default PdfModal;
