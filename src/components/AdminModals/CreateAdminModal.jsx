import { Dialog } from '@headlessui/react';
import { toast } from 'react-toastify';
import { useAdminListStore } from '../store/useAdminListStore';

const CreateAdminModal = ({ isOpen, onClose }) => {
  const addAdmin = useAdminListStore(state => state.addAdmin);

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      {/* Background overlay */}
      <div className="fixed inset-0 bg-black/70" aria-hidden="true" />

      {/* Modal position wrapper */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <Dialog.Title className="font-dm md:font-[600] md:text-[20px] font-[600] text-[18px] mb-2 mt-7">
            Create New Admin
          </Dialog.Title>

          <form
            onSubmit={e => {
              e.preventDefault();
              const adminName = e.target.adminName.value;
              const adminId = e.target.adminId.value;
              const password = e.target.password.value;

              if (adminName.length < 3) {
                toast.error('Admin Name must be at least 3 characters');
                return;
              }
              if (adminId.length !== 6 || isNaN(adminId)) {
                toast.error('Admin ID must be 6 digits');
                return;
              }
              if (password.length < 4) {
                toast.error('Password must be at least 4 characters');
                return;
              }

              const newAdmin = {
                id: Date.now().toString(),
                name: adminName,
                adminId,
              };

              addAdmin(newAdmin);
              toast.success('New Admin Successfully Created');

              onClose();
              window.scrollTo(0, 0);
            }}
          >
            {/* Admin Name */}
            <Dialog.Title className="font-dm md:font-[500] md:text-[14px] font-[500] text-[12px] mb-1 mt-4">
              Admin Name *
            </Dialog.Title>
            <input
              name="adminName"
              type="text"
              placeholder="Enter Admin Name"
              className="w-full border p-2 rounded mb-4 font-dm md:font-[300] md:text-[15px] text-[16px] bg-[#D9D9D9]"
            />

            {/* Admin ID */}
            <Dialog.Title className="font-dm md:font-[500] md:text-[14px] font-[500] text-[12px] mb-1">
              Admin ID (6 Digit Only) *
            </Dialog.Title>
            <input
              name="adminId"
              type="text"
              placeholder="Enter Admin ID"
              className="w-full border p-2 rounded mb-4 font-dm md:font-[300] md:text-[15px] text-[16px] bg-[#D9D9D9]"
            />

            {/* Password */}
            <Dialog.Title className="font-dm md:font-[500] md:text-[14px] font-[500] text-[12px] mb-1">
              Password *
            </Dialog.Title>
            <input
              name="password"
              type="password"
              placeholder="Enter Password"
              className="w-full border p-2 rounded mb-6 font-dm md:font-[300] md:text-[15px] text-[16px] bg-[#D9D9D9]"
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

export default CreateAdminModal;
