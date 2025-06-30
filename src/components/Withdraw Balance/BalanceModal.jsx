import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import AddBalanceModal from './AddBalanceModal';
import WithdrawBalanceModal from './WithdrawBalanceModal';

const BalanceModal = ({ isOpen, onClose }) => {
  const [showAddBalance, setShowAddBalance] = useState(false);
  const [showWithdrawBalance, setShowWithdrawBalance] = useState(false);

  return (
    <>
      <Dialog open={isOpen} onClose={onClose} className="relative z-50">
        <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-[#D9D9D9] w-full max-w-xs rounded-lg shadow-lg p-6 space-y-4">
            <button
              className="w-full bg-black text-white py-2 rounded font-dm font[400] md:text-[19px] text-[16px]"
              onClick={() => {
                setShowAddBalance(true);
                onClose();
              }}
            >
              Add Balance
            </button>
            <button
              className="w-full bg-black text-white py-2 rounded font-dm font[400] md:text-[19px] text-[16px]"
              onClick={() => {
                setShowWithdrawBalance(true);
                onClose();
              }}
            >
              Withdraw Balance
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>

      <AddBalanceModal
        isOpen={showAddBalance}
        onClose={() => setShowAddBalance(false)}
      />

      <WithdrawBalanceModal
        isOpen={showWithdrawBalance}
        onClose={() => setShowWithdrawBalance(false)}
      />
    </>
  );
};

export default BalanceModal;
