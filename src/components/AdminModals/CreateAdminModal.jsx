// import { Dialog } from '@headlessui/react';

// const CreateAdminModal = ({ isOpen, onClose }) => {
//   return (
//     <Dialog open={isOpen} onClose={onClose} className="relative z-50">
//       <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
//       <div className="fixed inset-0 flex items-center justify-center p-4">
//         <Dialog.Panel className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
//           <Dialog.Title className="text-lg font-semibold mb-4">
//             Create New Admin
//           </Dialog.Title>
//           <form
//             onSubmit={e => {
//               e.preventDefault();
//               const name = e.target.name.value;
//               const email = e.target.email.value;
//               const password = e.target.password.value;
//               console.log('New Admin:', { name, email, password });
//               onClose();
//               window.scrollTo(0, 0);
//             }}
//           >
//             <input
//               name="name"
//               type="text"
//               placeholder="Name"
//               className="w-full border p-2 rounded mb-3"
//               required
//             />
//             <input
//               name="email"
//               type="email"
//               placeholder="Email"
//               className="w-full border p-2 rounded mb-3"
//               required
//             />
//             <input
//               name="password"
//               type="password"
//               placeholder="Password"
//               className="w-full border p-2 rounded mb-4"
//               required
//             />
//             <div className="text-right">
//               <button
//                 type="submit"
//                 className="bg-green-500 text-white px-4 py-2 rounded"
//               >
//                 Create
//               </button>
//             </div>
//           </form>
//         </Dialog.Panel>
//       </div>
//     </Dialog>
//   );
// };

// export default CreateAdminModal;

import { Dialog } from '@headlessui/react';

const ChangeNameModal = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      {/* Background overlay */}
      <div className="fixed inset-0 bg-black/70" aria-hidden="true" />

      {/* Modal position wrapper */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <Dialog.Title className="font-dm md:font-[600] md:text-[20px] font-[600] text-[18px] mb-2 mt-7">
            Change Name
          </Dialog.Title>

          <form
            onSubmit={e => {
              e.preventDefault();
              const adminName = e.target.adminName.value;
              const adminId = e.target.adminId.value;
              const password = e.target.password.value;

              console.log('Admin Name:', adminName);
              console.log('Admin ID:', adminId);
              console.log('Password:', password);

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
              className="w-full border p-2 rounded mb-4 font-dm md:font-[300] md:text-[15px] font-[300] text-[16px] bg-[#D9D9D9]"
              required
            />

            {/* Admin ID */}
            <Dialog.Title className="font-dm md:font-[500] md:text-[14px] font-[500] text-[12px] mb-1">
              Admin ID (6 Digit Only) *
            </Dialog.Title>
            <input
              name="adminId"
              type="text"
              placeholder="Enter Admin Name"
              className="w-full border p-2 rounded mb-4 font-dm md:font-[300] md:text-[15px] font-[300] text-[16px] bg-[#D9D9D9]"
              required
            />

            {/* Password */}
            <Dialog.Title className="font-dm md:font-[500] md:text-[14px] font-[500] text-[12px] mb-1">
              Password *
            </Dialog.Title>
            <input
              name="password"
              type="password"
              placeholder="Enter Admin Name"
              className="w-full border p-2 rounded mb-6 font-dm md:font-[300] md:text-[15px] font-[300] text-[16px] bg-[#D9D9D9]"
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
