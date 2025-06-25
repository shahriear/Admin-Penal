import { Dialog } from '@headlessui/react';

const ChangeNameModal = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      {/* Background overlay */}
      <div className="fixed inset-0 bg-black/70" aria-hidden="true" />

      {/* Modal position wrapper */}
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
              console.log('New name:', name);
              onClose();
            }}
          >
            <input
              name="name"
              type="text"
              autoFocus
              placeholder="Enter Name Here"
              className="w-full border p-2 rounded mb-4 font-dm md:font-[300] md:text-[15px] font-[300] text-[10px] bg-[#D9D9D9] "
              required
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
