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
                className="flex-grow min-w-[150px] border px-3 py-2 rounded bg-[#D9D9D9] font-dm text-[16px]"
              />
              <button
                onClick={() => confirmUpdate(field)}
                className="bg-black text-white px-4 py-2 rounded font-dm font-[600] md:text-[16px] text-[14px]"
              >
                Confirm
              </button>
            </div>
          ))}

          <div className="flex sm:flex-row justify-between gap-9 mt-6">
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
