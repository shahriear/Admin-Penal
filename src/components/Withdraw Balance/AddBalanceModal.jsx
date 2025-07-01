import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';

const AddBalanceModal = ({ isOpen, onClose }) => {
  const [amount, setAmount] = useState('');

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-[#D9D9D9] w-full max-w-xs rounded-lg shadow-lg p-6 space-y-4">
          <input
            type="text"
            placeholder="Enter Amount *"
            className="w-full border rounded px-3 py-2 bg-white font-dm font[400] md:text-[16px] text-[16px]"
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />
          <button className="w-full bg-black text-white py-2 rounded font-dm font[400] md:text-[19px] text-[16px]">
            Add Balance
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default AddBalanceModal;
