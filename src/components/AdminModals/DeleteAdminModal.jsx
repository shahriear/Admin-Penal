import { Dialog } from '@headlessui/react';

import { useState } from 'react';
import { toast } from 'react-toastify';
import { useAdminListStore } from '../store/useAdminListStore';

const DeleteAdminModal = ({ isOpen, onClose }) => {
  const admins = useAdminListStore(state => state.admins);
  const removeAdmin = useAdminListStore(state => state.removeAdmin);

  const [selectedAdmin, setSelectedAdmin] = useState(null);

  const handleDelete = () => {
    if (selectedAdmin) {
      removeAdmin(selectedAdmin.id);
      toast.success(`Admin ${selectedAdmin.name} deleted`);
      setSelectedAdmin(null); // go back to list view
    }
  };

  return (
    <Dialog
      open={isOpen}
      onClose={() => {
        onClose();
        setSelectedAdmin(null);
      }}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg border-l-[23px] border-red-600 ">
          {/* 👉 List View */}
          {!selectedAdmin ? (
            <>
              <Dialog.Title className="text-lg font-semibold mb-4">
                Delete Admin
              </Dialog.Title>
              {admins.length === 0 ? (
                <p className="text-sm text-gray-500">No admins found.</p>
              ) : (
                <ul className="space-y-2 max-h-64 overflow-y-auto">
                  {admins.map(admin => (
                    <li
                      key={admin.id}
                      className="flex justify-between items-center bg-gray-100 px-3 py-2 rounded"
                    >
                      <span className="text-sm font-medium">{admin.name}</span>
                      <button
                        onClick={() => setSelectedAdmin(admin)}
                        className="text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </li>
                  ))}
                </ul>
              )}
              <div className="text-center mt-6">
                <button
                  onClick={() => {
                    onClose();
                    setSelectedAdmin(null);
                  }}
                  className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
                >
                  Close
                </button>
              </div>
            </>
          ) : (
            // 👉 Confirmation View
            <div>
              <p className="mb-4 font-dm md:font-[400] md:text-[16px] font-[400] text-[13px] text-gray-600">
                Are you sure you want to delete (
                <span className="text-red-600">{selectedAdmin.name}</span>)?
              </p>
              <div className="flex justify-center gap-2">
                <button
                  onClick={() => setSelectedAdmin(null)}
                  className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded font-dm md:font-[500] md:text-[14px] text-[12px]"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-dm md:font-[500] md:text-[14px] text-[12px]"
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default DeleteAdminModal;
