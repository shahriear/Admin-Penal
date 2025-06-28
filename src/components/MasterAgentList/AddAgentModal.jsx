import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';

const AddAgentModal = ({ isOpen, onClose }) => {
  const [agentType, setAgentType] = useState('');
  const [territoryArea, setTerritoryArea] = useState('');
  const [masterId, setMasterId] = useState('');
  const [agentId, setAgentId] = useState('');
  const [password, setPassword] = useState('');
  const [masterName, setMasterName] = useState('');

  const handleAgentIdChange = e => {
    const value = e.target.value.replace(/\D/, '');
    setAgentId(value);
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white w-full max-w-md rounded-lg shadow-lg p-6">
          <Dialog.Title className="font-dm font-[600] md:text-[20px] text-[18px] mb-4">
            Add New Agent
          </Dialog.Title>

          {/* <label className="block text-sm font-medium mb-1 ">
            Select Agent Type*
          </label> */}
          <select
            className="w-full p-2 border rounded mb-4 bg-[#CCCACA] font-dm font-[400] md:text-[16px] text-[15px] "
            value={agentType}
            onChange={e => {
              setAgentType(e.target.value);
              setMasterId('');
              setAgentId('');
              setPassword('');
              setTerritoryArea('');
              setMasterName('');
            }}
          >
            <option
              className="bg-[#EBE9E9] font-dm font-[400] md:text-[16px] text-[14px]"
              value=""
            >
              Select Agent Type*
            </option>
            <option
              className="bg-[#EBE9E9] font-dm font-[400] md:text-[16px] text-[14px]"
              value="Master Agent"
            >
              Master Agent
            </option>
            <option
              className="bg-[#EBE9E9] font-dm font-[400] md:text-[16px] text-[14px]"
              value="Normal Agent"
            >
              Normal Agent
            </option>
          </select>

          {agentType === 'Master Agent' && (
            <div className="space-y-3">
              {/* <label className="block text-sm font-medium mb-1 ">
                Select Territory Area*
              </label> */}
              <select
                className="w-full p-2 border rounded bg-[#D9D9D9] font-[400] md:text-[16px] text-[14px]"
                value={territoryArea}
                onChange={e => setTerritoryArea(e.target.value)}
              >
                <option
                  className="font-[400] md:text-[16px] text-[15px]"
                  value=""
                >
                  Select Territory Area*-
                </option>
                <option>Dhaka</option>
                <option>Barishal</option>
                <option>Chittagong</option>
                <option>Khulna</option>
                <option>Mymenshing</option>
                <option>Rajshahi</option>
                <option>Rangpur</option>
                <option>Sylhet</option>
              </select>

              <input
                type="text"
                placeholder="Enter Master Agent ID (6 Digit)"
                className="w-full border rounded px-3 py-2 bg-[#D9D9D9] font-[400] md:text-[16px] text-[14px]"
                maxLength={6}
                value={masterId}
                onChange={e => setMasterId(e.target.value.replace(/\D/, ''))}
              />
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full border rounded px-3 py-2 bg-[#D9D9D9] font-[400] md:text-[16px] text-[14px]"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
          )}

          {agentType === 'Normal Agent' && (
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Enter Master Agent ID *"
                className="w-full border rounded px-3 py-2 bg-[#D9D9D9] font-[400] md:text-[16px] text-[14px]"
                value={masterId}
                onChange={e => {
                  setMasterId(e.target.value);
                  setMasterName(
                    e.target.value === '01773647834' ? 'Nancy Himel' : ''
                  );
                }}
              />
              {masterId && (
                <p className="text-xs text-red-500 ml-1">
                  Name: {masterName || 'Invalid ID'}
                </p>
              )}

              <input
                type="text"
                placeholder="Enter Agent ID (4 Digit Only)"
                className="w-full border rounded px-3 py-2 bg-[#D9D9D9] font-[400] md:text-[16px] text-[14px]"
                value={agentId}
                onChange={handleAgentIdChange}
                maxLength={4}
              />
              <input
                type="password"
                placeholder="Enter Password *"
                className="w-full border rounded px-3 py-2 bg-[#D9D9D9] font-[400] md:text-[16px] text-[14px]"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
          )}

          <div className="mt-6 flex justify-center gap-2">
            <button className="px-4 py-2 bg-black text-white rounded w-full font-dm font-[700] md:text-[18px] text-[15px] ">
              Confirm
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default AddAgentModal;
