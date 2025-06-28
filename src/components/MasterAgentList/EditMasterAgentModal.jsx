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

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-fit px-10 max-w-md rounded bg-white p-6 space-y-4 pt-9 pb-9">
          {/* Name Field */}
          <div>
            <label className="block mb-1 font-medium">Name:</label>
            <div className="flex gap-3">
              <input
                type="text"
                value={name}
                placeholder="Name"
                onChange={e => setName(e.target.value)}
                className="border px-3 py-1 rounded w-full font-dm text-[14px]"
              />
              <button
                onClick={() => onUpdate({ ...agent, name })}
                className="bg-black text-white px-4 py-1 rounded whitespace-nowrap font-dm font-[700] md:text-[16px] text-[14px]"
              >
                Confirm
              </button>
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="block mb-1 font-medium">Password:</label>
            <div className="flex gap-3">
              <input
                type="text"
                value={password}
                placeholder="******"
                onChange={e => setPassword(e.target.value)}
                className="border px-3 py-1 rounded w-full font-dm text-[14px]"
              />
              <button
                onClick={() => onUpdate({ ...agent, password })}
                className="bg-black text-white px-4 py-1 rounded whitespace-nowrap font-dm font-[700] md:text-[16px] text-[14px]"
              >
                Confirm
              </button>
            </div>
          </div>

          {/* Delete Button */}
          <div className="pt-1">
            <button
              onClick={() => onDelete(agent)}
              className=" text-red-700 font-dm font-[500] md:text-[16px] text-[14px] border px-2 py-1 rounded w-fit"
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
