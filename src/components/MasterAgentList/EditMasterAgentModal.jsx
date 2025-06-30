import React, { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';

const EditMasterAgentModal = ({
  isOpen,
  onClose,
  agent,
  onUpdate,
  onDelete,
}) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (agent) {
      setName(agent.name || '');
      setPassword(agent.password || '');
    }
  }, [agent]);

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/60" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md bg-white rounded-xl shadow-xl p-6 relative space-y-6">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold text-gray-800">
              Edit Master Agent
            </h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-red-600 text-2xl leading-none"
            >
              &times;
            </button>
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Name:
            </label>
            <div className="flex gap-3">
              <input
                type="text"
                value={name}
                placeholder="Enter name"
                onChange={e => setName(e.target.value)}
                className="border px-3 py-1 rounded w-full font-dm text-[16px]"
              />
              <button
                onClick={() => onUpdate({ ...agent, name })}
                className="bg-black text-white px-4 py-1 rounded font-semibold text-sm"
              >
                Confirm
              </button>
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Password:
            </label>
            <div className="flex gap-3">
              <input
                type="text"
                value={password}
                placeholder="Enter password"
                onChange={e => setPassword(e.target.value)}
                className="border px-3 py-1 rounded w-full font-dm text-[16px]"
              />
              <button
                onClick={() => onUpdate({ ...agent, password })}
                className="bg-black text-white px-4 py-1 rounded font-semibold text-sm"
              >
                Confirm
              </button>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => onDelete(agent)}
              className="text-red-600 border border-red-600 px-4 py-1 rounded font-medium text-sm hover:bg-red-50"
            >
              Delete Agent
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default EditMasterAgentModal;
