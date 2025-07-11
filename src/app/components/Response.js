'use client';

import React from 'react';

const Response = ({ response, querySubmitted, onCitationClick }) => {
  return (
    <div className="w-full bg-white p-4 space-y-4 max-w-full flex flex-col items-start text-black">
      {querySubmitted && (
        <div className="bg-[#F3F2F3] p-4 rounded-2xl w-fit max-w-2/3 self-end">
          <p className="text-sm">{querySubmitted}</p>
        </div>
      )}

      <div className="p-4 rounded-2xl w-full self-start space-y-3">
        <p className="text-sm">{response.answer}</p>

        <div className="mt-8">
          <div className="font-semibold mb-4">Legal Position:</div>
          <div className="flex gap-2 justify-start">
            <div className="bg-[#d4d4d4] w-1"></div>
            <button
              onClick={onCitationClick}
              className="text-left text-sm hover:underline"
            >
              {response.citations[0].text}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Response;
