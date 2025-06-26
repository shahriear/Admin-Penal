import React, { useState } from 'react';
import DeleteConfirmModal from '../DeletePopup/DeleteConfirmModal';

const EditAgentModal = ({ agent, onClose, onUpdate, onDelete }) => {
  const [fields, setFields] = useState({
    name: agent.name || '',
    password: agent.password,
    id: agent.account,
  });
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFields(prev => ({ ...prev, [name]: value }));
  };

  const confirmUpdate = field => {
    onUpdate(agent.id, field, fields[field]);
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 px-4">
        <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg">
          {[
            { label: 'Name', field: 'name' },
            { label: 'Password', field: 'password' },
            { label: 'Agent ID', field: 'id' },
          ].map(({ label, field }) => (
            <div key={field} className="flex items-center mb-3 mt-4">
              <input
                type="text"
                name={field}
                value={fields[field]}
                onChange={handleChange}
                placeholder={label}
                className="flex-grow border p-2 rounded mr-2 bg-[#D9D9D9] border-gray-300"
              />
              <button
                onClick={() => confirmUpdate(field)}
                className="bg-black text-white px-3 py-1 rounded"
              >
                Confirm
              </button>
            </div>
          ))}

          <div className="flex justify-between mt-5">
            <button
              className="text-red-500 border border-red-500 px-4 py-2 rounded text-sm"
              onClick={() => setShowDeleteConfirm(true)}
            >
              Delete Agent
            </button>
            <button className="text-gray-600 underline" onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>

      <DeleteConfirmModal
        isOpen={showDeleteConfirm}
        onClose={() => setShowDeleteConfirm(false)}
        onConfirm={() => {
          onDelete(agent.id);
          setShowDeleteConfirm(false);
        }}
        name={fields.name}
      />
    </>
  );
};

export default EditAgentModal;
