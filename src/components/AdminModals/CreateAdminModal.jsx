import { Dialog } from '@headlessui/react';

const CreateAdminModal = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <Dialog.Title className="text-lg font-semibold mb-4">
            Create New Admin
          </Dialog.Title>
          <form
            onSubmit={e => {
              e.preventDefault();
              const name = e.target.name.value;
              const email = e.target.email.value;
              const password = e.target.password.value;
              console.log('New Admin:', { name, email, password });
              onClose();
            }}
          >
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="w-full border p-2 rounded mb-3"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full border p-2 rounded mb-3"
              required
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="w-full border p-2 rounded mb-4"
              required
            />
            <div className="text-right">
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Create
              </button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default CreateAdminModal;
