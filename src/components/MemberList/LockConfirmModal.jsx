import { Dialog } from '@headlessui/react';

const LockConfirmModal = ({ isOpen, onClose, onConfirm, name }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md border-l-[23px] border-[#FDAC29] text-center">
          <Dialog.Title className="text-lg font-semibold mb-2">
            Block Member
          </Dialog.Title>
          <p className="font-dm font-[400] md:text-[14px] text-[13px] text-gray-600 mb-6">
            Are you sure you want to
            <span className="text-red-600"> banned </span>
            {name}?
          </p>
          <div className="flex justify-center gap-2">
            <button
              onClick={onClose}
              className="bg-gray-300 px-4 py-2 rounded font-dm font-[500] md:text-[13px] text-[12px]"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="bg-[#FDAC29] text-white px-4 py-2 rounded font-dm font-[500] md:text-[13px] text-[12px]"
            >
              Block
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default LockConfirmModal;
