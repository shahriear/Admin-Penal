// import { Dialog } from '@headlessui/react';

// const ChangePasswordModal = ({ isOpen, onClose }) => {
//   return (
//     <Dialog open={isOpen} onClose={onClose} className="relative z-50">
//       <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
//       <div className="fixed inset-0 flex items-center justify-center p-4">
//         <Dialog.Panel className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
//           <Dialog.Title className="text-lg font-semibold mb-4">
//             Change Password
//           </Dialog.Title>
//           <form
//             onSubmit={e => {
//               e.preventDefault();
//               const oldPass = e.target.oldPassword.value;
//               const newPass = e.target.newPassword.value;
//               console.log('Change Password:', { oldPass, newPass });
//               onClose();
//               window.scrollTo(0, 0);
//             }}
//           >
//             <input
//               name="oldPassword"
//               type="password"
//               placeholder="Old Password"
//               className="w-full border p-2 rounded mb-3"
//               required
//             />
//             <input
//               name="newPassword"
//               type="password"
//               placeholder="New Password"
//               className="w-full border p-2 rounded mb-4"
//               required
//             />
//             <div className="text-right">
//               <button
//                 type="submit"
//                 className="bg-blue-500 text-white px-4 py-2 rounded"
//               >
//                 Update
//               </button>
//             </div>
//           </form>
//         </Dialog.Panel>
//       </div>
//     </Dialog>
//   );
// };

// export default ChangePasswordModal;
import { Dialog } from '@headlessui/react';
import { toast } from 'react-toastify';

const ChangeNameModal = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      {/* Background overlay */}
      <div className="fixed inset-0 bg-black/70" aria-hidden="true" />

      {/* Modal position wrapper */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <Dialog.Title className=" font-dm md:font-[600] md:text-[20px] font-[600] text-[18px] mb-2 mt-7">
            Change Password
          </Dialog.Title>
          <Dialog.Title className="font-dm md:font-[500] md:text-[14px] font-[500] text-[12px] mb-1">
            Enter New Password *
          </Dialog.Title>
          <form
            onSubmit={e => {
              e.preventDefault();

              const newPass = e.target.newPassword.value;
              if (newPass.length < 4) {
                toast.error('Password must be at least 4 characters');
                return;
              }
              toast.success('Passward Successfully Change');
              console.log('Change Password:', { newPass });
              onClose();
              window.scrollTo(0, 0);
            }}
          >
            <input
              name="newPassword"
              type="password"
              placeholder="Enter Password Here"
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
