import { Dialog } from '@headlessui/react';

const DeleteAdminModal = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <Dialog.Title className="text-lg font-semibold mb-4 text-red-600">
            Delete Admin
          </Dialog.Title>
          <p className="mb-4 text-sm text-gray-600">
            Are you sure you want to delete this admin? This action cannot be
            undone.
          </p>
          <div className="flex justify-end gap-2">
            <button
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                console.log('Admin Deleted!');
                onClose();
              }}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default DeleteAdminModal;
