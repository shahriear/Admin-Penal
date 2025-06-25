import { Dialog } from '@headlessui/react';

const ChangePasswordModal = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <Dialog.Title className="text-lg font-semibold mb-4">
            Change Password
          </Dialog.Title>
          <form
            onSubmit={e => {
              e.preventDefault();
              const oldPass = e.target.oldPassword.value;
              const newPass = e.target.newPassword.value;
              console.log('Change Password:', { oldPass, newPass });
              onClose();
            }}
          >
            <input
              name="oldPassword"
              type="password"
              placeholder="Old Password"
              className="w-full border p-2 rounded mb-3"
              required
            />
            <input
              name="newPassword"
              type="password"
              placeholder="New Password"
              className="w-full border p-2 rounded mb-4"
              required
            />
            <div className="text-right">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Update
              </button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default ChangePasswordModal;
