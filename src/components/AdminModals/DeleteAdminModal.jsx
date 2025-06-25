import { Dialog } from '@headlessui/react';

import { toast } from 'react-toastify';
import { useAdminListStore } from '../store/useAdminListStore';
import { MdAutoDelete, MdOutlineAutoDelete } from 'react-icons/md';

const DeleteAdminModal = ({ isOpen, onClose }) => {
  const admins = useAdminListStore(state => state.admins);
  const removeAdmin = useAdminListStore(state => state.removeAdmin);

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg ">
          <Dialog.Title className="font-dm md:font-[600] md:text-[22px] font-[600] text-[18px] mb-4">
            Admin List
          </Dialog.Title>
          {admins.length === 0 ? (
            <p className="text-sm text-gray-500">No admins found.</p>
          ) : (
            <ul className="space-y-2 max-h-64 overflow-y-auto">
              {admins.map(admin => (
                <li
                  key={admin.id}
                  className="flex items-center justify-between bg-gray-100 px-3 py-2 rounded"
                >
                  <span className="font-dm md:font-[500] md:text-[16px] font-[500] text-[13px]">
                    {admin.name}
                  </span>
                  <button
                    className="text-sm  hover:bg-gray-200 text-white px-3 py-1 rounded"
                    onClick={() => {
                      removeAdmin(admin.id);
                      toast.success(`Deleted Admin${admin.name}`);
                    }}
                  >
                    <MdAutoDelete className="text-[#FB0000] md:text-[20px] text-[17px] " />
                  </button>
                </li>
              ))}
            </ul>
          )}
          <div className="text-center mt-6">
            <button
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-1 rounded"
            >
              Close
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default DeleteAdminModal;
