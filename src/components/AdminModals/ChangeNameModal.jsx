import { Dialog } from '@headlessui/react';
import { toast } from 'react-toastify';

const ChangeNameModal = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/70" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <Dialog.Title className=" font-dm md:font-[600] md:text-[20px] font-[600] text-[18px] mb-2 mt-7">
            Change Name
          </Dialog.Title>
          <Dialog.Title className="font-dm md:font-[500] md:text-[14px] font-[500] text-[12px] mb-1">
            Enter New Name *
          </Dialog.Title>
          <form
            onSubmit={e => {
              e.preventDefault();
              const name = e.target.name.value;
              if (name.length < 3) {
                toast.error('Admin Name must be at least 3 characters');
                return;
              }

              toast.success('Name changed successfully!');
              console.log('New name:', name);
              onClose();
              window.scrollTo(0, 0);
            }}
          >
            <input
              name="name"
              type="text"
              autoFocus
              placeholder="Enter Name Here"
              className="w-full border p-2 rounded mb-4 font-dm md:font-[300] md:text-[15px] font-[300] text-[16px] bg-[#D9D9D9] "
            />
            <div className="text-center">
              <button
                type="submit"
                className="bg-black text-white w-full py-2 rounded mb-12"
              >
                Confirm
              </button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default ChangeNameModal;
