import { Dialog } from '@headlessui/react';

const DeleteAdminModal = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50 ">
      <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md bg-white  p-6 rounded-lg shadow-lg border-l-[23px] border-[#FF0707D9] ">
          <p className="mb-4 font-dm md:font-[400] md:text-[16px] font-[400] text-[12px] text-gray-600">
            Are you sure you want to delete (
            <span className="text-red-600">Admin Name</span>)?
          </p>
          <div className="flex justify-center gap-5">
            <button
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded  font-dm md:font-[500] md:text-[14px] font-[500] text-[12px]"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                console.log('Admin Deleted!');
                onClose();
                window.scrollTo(0, 0);
              }}
              className="bg-[#FF0000] hover:bg-red-700 text-white px-4 py-2 rounded font-dm md:font-[500] md:text-[14px] font-[500] text-[12px]"
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
