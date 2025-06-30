import React from 'react';
import { toast } from 'react-toastify';

const DepositWithdraw = () => {
  const handleDepositSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const id = form.elements[0].value.trim();
    const amount = form.elements[1].value.trim();

    if (!id || !amount) {
      toast.error('All fields are required for deposit!');
    } else {
      toast.success('Deposit Successful!');
      form.reset();
    }
  };

  const handleWithdrawSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const id = form.elements[0].value.trim();
    const amount = form.elements[1].value.trim();

    if (!id || !amount) {
      toast.error('All fields are required for withdrawal!');
    } else {
      toast.success('Withdraw Successful!');
      form.reset();
    }
  };

  return (
    <div className="bg-white p-4">
      <div className="max-w-md">
        {/*========== Deposit Form =============*/}
        <h2 className="font-dm md:font-[500] md:text-[20px] font-[500] text-[18px] mb-4">
          Deposit
        </h2>
        <form className="mb-[60px]" onSubmit={handleDepositSubmit}>
          <div className="mb-4">
            <label className="block font-dm text-[14px] md:text-[16px] mb-1">
              Enter Agent ID/User Number <span className="text-black">*</span>
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-400 rounded bg-[#D9D9D9] focus:outline-blue-600"
            />
            <p className="font-dm text-[10px] mt-1">
              Name : Nancy Himel /{' '}
              <span className="text-red-600">Invalid ID</span>
            </p>
          </div>

          <div className="mb-4">
            <label className="block font-dm text-[14px] md:text-[16px] mb-1">
              Enter Amount <span className="text-black">*</span>
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-400 rounded bg-[#D9D9D9] focus:outline-blue-600"
            />
          </div>

          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded font-dm font-[500] text-[16px] md:text-[20px]"
          >
            Submit
          </button>
        </form>

        {/*================== Withdraw Form ===========*/}
        <h2 className="font-dm md:font-[500] md:text-[20px] font-[500] text-[18px] mb-4">
          Withdraw
        </h2>
        <form onSubmit={handleWithdrawSubmit}>
          <div className="mb-4">
            <label className="block font-dm text-[14px] md:text-[16px] mb-1">
              Enter Agent ID/User Number <span className="text-black">*</span>
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-400 rounded bg-[#D9D9D9] focus:outline-blue-600"
            />
            <p className="font-dm text-[10px] mt-1">
              Name : Nancy Himel /{' '}
              <span className="text-red-600">Invalid ID</span>
            </p>
          </div>

          <div className="mb-4">
            <label className="block font-dm text-[14px] md:text-[16px] mb-1">
              Enter Amount <span className="text-black">*</span>
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-400 rounded bg-[#D9D9D9] focus:outline-blue-600"
            />
          </div>

          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded font-dm font-[500] text-[16px] md:text-[20px]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default DepositWithdraw;
