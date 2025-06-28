import React, { useEffect } from 'react';

const AddTerritoryAgentModal = ({ isOpen, onClose, onConfirm }) => {
  useEffect(() => {
    const handleEscape = e => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = e => {
    if (e.target.id === 'modal-backdrop') {
      onClose();
    }
  };

  return (
    <div
      id="modal-backdrop"
      className="fixed inset-0 bg-black/70 bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-white w-[90%] max-w-md rounded-lg p-5 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-xl font-bold text-gray-600"
        >
          &times;
        </button>

        {/* Modal Content */}
        <h2 className="text-lg font-dm font-[600] mb-4">Add Territory Agent</h2>

        <div className="space-y-3">
          <input
            type="text"
            placeholder="Territory Agent"
            className="w-full border rounded p-2 text-[16px] font-dm bg-[#D9D9D9]"
          />
          <select className="w-full border rounded p-2 text-[15px] font-dm bg-[#D9D9D9]">
            <option value="">Select Territory Area</option>
            <option>Dhaka</option>
            <option>Barishal</option>
            <option>Chittagong</option>
            <option>Khulna</option>
            <option>Mymenshing</option>
            <option>Rajshahi</option>
            <option>Rangpur</option>
            <option>Sylhet</option>
          </select>
          <input
            type="text"
            placeholder="Enter Territory Agent ID (6 Digit)"
            className="w-full border rounded p-2 text-[16px] font-dm bg-[#D9D9D9]"
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full border rounded p-2 text-[16px] font-dm bg-[#D9D9D9]"
          />
        </div>

        <div className="mt-5 text-center">
          <button
            className="bg-black text-white px-4 w-full py-2 rounded"
            onClick={onConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTerritoryAgentModal;
