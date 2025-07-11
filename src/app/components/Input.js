'use client';
import React, { useRef } from 'react';

const Input = ({ onSubmit, loading, query, setQuery }) => {
  const textareaRef = useRef(null);

  const handleInput = (e) => {
    setQuery(e.target.value);
    autoResize();
  };

  const autoResize = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSubmit(query);
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
    }
  };

  return (
    <div className="flex flex-col items-center bg-[#F3F2F3] rounded-[28px] p-2.5 w-full text-black absolute bottom-4 border border-[#E6E7E6]">
      <textarea
        ref={textareaRef}
        rows={1}
        className="w-full overflow-y-auto resize-none border-0 bg-transparent px-3 py-2 text-sm placeholder:text-black/60 font-semibold focus:outline-none"
        name="prompt-textarea"
        placeholder="Ask anything"
        aria-label="Ask anything"
        value={query}
        onInput={handleInput}
      />

      <div className="flex justify-between items-center w-full mt-2 px-3">
        <div className="flex items-center space-x-3">
          <button className="opacity-70 hover:opacity-90 transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </button>

          <button className="flex items-center gap-1 text-sm font-medium opacity-80 hover:opacity-100 transition">
            Tools
          </button>
        </div>

        <div className="flex items-center space-x-3">
          <button className="opacity-70 hover:opacity-90 transition">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-6m0 0V6m0 6h6m-6 0H6" />
            </svg>
          </button>

          <button
            aria-label="Send prompt"
            disabled={query.length === 0 || loading}
            onClick={handleSubmit}
            className={`flex items-center justify-center h-9 w-9 rounded-full transition-colors
              ${query.length === 0 || loading ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-black text-white hover:opacity-70'}
              disabled:bg-[#D7D7D7] disabled:text-[#f4f4f4] disabled:hover:opacity-100`}
          >
            {loading ? (
              <div className="flex space-x-1">
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"></span>
              </div>
            ) : (
              <svg
                width="30"
                height="20"
                viewBox="0 0 20 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
              >
                <path d="M8.99992 16V6.41407L5.70696 9.70704C5.31643 10.0976 4.68342 10.0976 4.29289 9.70704C3.90237 9.31652 3.90237 8.6835 4.29289 8.29298L9.29289 3.29298L9.36907 3.22462C9.76184 2.90427 10.3408 2.92686 10.707 3.29298L15.707 8.29298L15.7753 8.36915C16.0957 8.76192 16.0731 9.34092 15.707 9.70704C15.3408 10.0732 14.7618 10.0958 14.3691 9.7754L14.2929 9.70704L10.9999 6.41407V16C10.9999 16.5523 10.5522 17 9.99992 17C9.44764 17 8.99992 16.5523 8.99992 16Z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
