// import React, { useState, useRef, useEffect } from 'react';
// import DeleteConfirmModal from '../DeletePopup/DeleteConfirmModal';

// const EditMemberModal = ({ member, onClose, onUpdate, onDelete }) => {
//   const [fields, setFields] = useState({
//     name: member.name || '',
//     password: member.password,
//     account: member.account,
//     agent: member.agent,
//   });

//   const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
//   const modalRef = useRef();

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setFields(prev => ({ ...prev, [name]: value }));
//   };

//   const confirmUpdate = field => {
//     onUpdate(member.id, field, fields[field]);
//   };

//   // Outside click to close modal
//   useEffect(() => {
//     const handleClickOutside = event => {
//       if (modalRef.current && !modalRef.current.contains(event.target)) {
//         onClose();
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, [onClose]);

//   return (
//     <>
//       {/* Overlay */}
//       <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-40 px-4">
//         <div
//           ref={modalRef}
//           className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg"
//         >
//           <h3 className="text-lg md:text-xl font-bold mb-5 text-center">
//             Edit Member Profile
//           </h3>

//           {/* Name Field */}
//           <div className="mb-4">
//             <label className="block mb-1 text-sm font-medium text-gray-700">
//               Name
//             </label>
//             <div className="flex items-center gap-2">
//               <input
//                 type="text"
//                 name="name"
//                 value={fields.name}
//                 onChange={handleChange}
//                 className="flex-grow border bg-[#D9D9D9] border-gray-300 p-2 rounded text-sm"
//               />
//               <button
//                 onClick={() => confirmUpdate('name')}
//                 className="bg-black text-white text-sm px-4 py-2 rounded font-medium"
//               >
//                 Confirm
//               </button>
//             </div>
//             <p className="text-[10px] text-gray-600">Name : Nancy Himel</p>
//           </div>

//           {/* Password Field */}
//           <div className="mb-4">
//             <label className="block mb-1 text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <div className="flex items-center gap-2">
//               <input
//                 type="text"
//                 name="password"
//                 value={fields.password}
//                 onChange={handleChange}
//                 className="flex-grow border bg-[#D9D9D9] border-gray-300 p-2 rounded text-sm"
//               />
//               <button
//                 onClick={() => confirmUpdate('password')}
//                 className="bg-black text-white text-sm px-4 py-2 rounded font-medium"
//               >
//                 Confirm
//               </button>
//             </div>
//           </div>

//           {/* Number Field */}
//           <div className="mb-4">
//             <label className="block mb-1 text-sm font-medium text-gray-700">
//               Number
//             </label>
//             <div className="flex items-center gap-2">
//               <input
//                 type="text"
//                 name="account"
//                 value={fields.account}
//                 onChange={handleChange}
//                 className="flex-grow border bg-[#D9D9D9] border-gray-300 p-2 rounded text-sm"
//               />
//               <button
//                 onClick={() => confirmUpdate('account')}
//                 className="bg-black text-white text-sm px-4 py-2 rounded font-medium"
//               >
//                 Confirm
//               </button>
//             </div>
//           </div>

//           {/* Agent Field */}
//           <div className="mb-6">
//             <label className="block mb-1 text-sm font-medium text-gray-700">
//               Agent Number{' '}
//               <span className="text-red-600 font-[400]">
//                 (For Change Agent)
//               </span>
//             </label>
//             <div className="flex items-center gap-2">
//               <input
//                 type="text"
//                 name="agent"
//                 value={fields.agent}
//                 onChange={handleChange}
//                 className="flex-grow border bg-[#D9D9D9] border-gray-300 p-2 rounded text-sm"
//               />
//               <button
//                 onClick={() => confirmUpdate('agent')}
//                 className="bg-black text-white text-sm px-4 py-2 rounded font-medium"
//               >
//                 Confirm
//               </button>
//             </div>
//             <p className="text-[10px] text-gray-600">
//               Name : Nancy Himel / <span className="text-red-600">Invalid</span>
//             </p>
//           </div>

//           {/* Delete Button */}
//           <div className="flex justify-start">
//             <button
//               onClick={() => setShowDeleteConfirm(true)}
//               className="text-red-500 border border-red-500 px-4 py-2 rounded text-sm font-medium"
//             >
//               Delete User
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Delete Modal */}
//       <DeleteConfirmModal
//         isOpen={showDeleteConfirm}
//         onClose={() => setShowDeleteConfirm(false)}
//         onConfirm={() => {
//           if (member?.id) {
//             onDelete(member.id);
//             setShowDeleteConfirm(false);
//           }
//         }}
//         name={fields.name}
//       />
//     </>
//   );
// };

// export default EditMemberModal;

import React, { useState } from 'react';
import DeleteConfirmModal from '../DeletePopup/DeleteConfirmModal';

const EditMemberModal = ({ member, onClose, onUpdate, onDelete }) => {
  const [fields, setFields] = useState({
    name: member.name || '',
    password: member.password,
    account: member.account,
    agent: member.agent,
  });

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFields(prev => ({ ...prev, [name]: value }));
  };

  const confirmUpdate = field => {
    onUpdate(member.id, field, fields[field]);
  };

  return (
    <>
      {/* Main Edit Modal */}
      <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-40 px-4 sm:px-6">
        <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-4 sm:p-6 overflow-y-auto max-h-[90vh]">
          <h3 className="text-center text-lg sm:text-xl font-bold mb-5">
            Edit Member Profile
          </h3>

          {[
            { label: 'Name', field: 'name' },
            { label: 'Password', field: 'password' },
            { label: 'Number', field: 'account' },
            { label: 'Agent Number', field: 'agent' },
          ].map(({ label, field }) => (
            <div
              key={field}
              className="flex flex-wrap sm:flex-nowrap items-center gap-2 mb-4"
            >
              <input
                type="text"
                name={field}
                value={fields[field]}
                onChange={handleChange}
                placeholder={label}
                className="flex-grow min-w-[150px] border px-3 py-2 rounded bg-[#D9D9D9] text-sm sm:text-base"
              />
              <button
                onClick={() => confirmUpdate(field)}
                className="bg-black text-white px-4 py-2 rounded text-sm sm:text-base"
              >
                Confirm
              </button>
            </div>
          ))}

          <div className="flex flex-col sm:flex-row justify-between gap-3 mt-6">
            <button
              className="text-red-600 border border-red-600 px-4 py-2 rounded text-sm font-medium w-full sm:w-auto"
              onClick={() => setShowDeleteConfirm(true)}
            >
              Delete User
            </button>

            <button
              className="text-gray-600 border border-gray-400 px-4 py-2 rounded text-sm font-medium w-full sm:w-auto"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      <DeleteConfirmModal
        isOpen={showDeleteConfirm}
        onClose={() => setShowDeleteConfirm(false)}
        onConfirm={() => onDelete(member.id)}
        name={fields.name}
      />
    </>
  );
};

export default EditMemberModal;
