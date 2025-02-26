import React from "react";

const modal = ({ children, title, isOpen, onClose }) => {
    if (!isOpen) return null;


return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-x1 w-full max-w-md p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-x1 font-semibold text-gray-800">{title}</h2>
                <button onClick={onClose} className="text-gray-400 hover:semibold text-gray-800">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
                </button>
            </div>
            {children}
        </div>
    </div>
);
};

export default modal;