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
      <div className="fixed inset-0 bg-black/70 bg-opacity-40 flex justify-center items-center z-40">
        <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg">
          <h3 className="text-lg font-bold mb-4 text-center">
            Edit Member Profile
          </h3>

          {[
            { label: 'Name', field: 'name' },
            { label: 'Password', field: 'password' },
            { label: 'Number', field: 'account' },
            { label: 'Agent Number', field: 'agent' },
          ].map(({ label, field }) => (
            <div key={field} className="flex items-center mb-3">
              <input
                type="text"
                name={field}
                value={fields[field]}
                onChange={handleChange}
                placeholder={label}
                className="flex-grow border p-2 rounded mr-2"
              />
              <button
                onClick={() => confirmUpdate(field)}
                className="bg-green-500 text-white px-3 py-1 rounded"
              >
                Confirm
              </button>
            </div>
          ))}

          <button
            className="bg-red-600 text-white px-4 py-2 rounded w-full mt-4"
            onClick={() => setShowDeleteConfirm(true)}
          >
            Delete User
          </button>

          <button
            className="mt-3 text-gray-600 underline w-full"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>

      {/* Separate Delete Confirmation Modal */}
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
