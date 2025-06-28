import React from 'react';

const DeleteConfirmModal = ({ isOpen, onClose, onConfirm, name }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 px-4">
      <div className="bg-white p-6 mx-2 rounded-lg shadow-md w-full max-w-sm border-l-[16px] border-red-600">
        <p className="text-sm text-center mb-4">
          Are you sure you want to delete{' '}
          <span className="font-semibold">{name || 'this user'}</span>?
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onClose}
            className="bg-gray-300 text-black px-4 py-1 rounded"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="bg-red-600 text-white px-4 py-1 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
