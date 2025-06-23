import React from 'react';

const DepositWithdraw = () => {
  return (
    <div className="bg-white p-4">
      <div className="max-w-md">
        {/* Deposit Form */}
        <h2 className="md:text-[20px] text-[18px] font-semibold mb-4">
          Deposit
        </h2>
        <form className="mb-[59px]">
          <div className="mb-4">
            <label className="block md:text-[16px] text-[14px] font-medium mb-1">
              Enter Agent ID/User Number <span className="text-black">*</span>
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-400 rounded bg-gray-200 focus:outline-blue-600"
            />
            <p className="text-[10px] mt-1">
              Name : Nancy Himel /
              <span className="text-red-600">Invalid ID</span>
            </p>
          </div>

          <div className="mb-4">
            <label className="block md:text-[16px] text-[14px] font-medium mb-1">
              Enter Amount <span className="text-black">*</span>
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-400 rounded bg-gray-200 focus:outline-blue-600"
            />
          </div>

          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded"
          >
            Submit
          </button>
        </form>

        {/* Withdraw Form */}
        <h2 className="text-xl font-semibold mb-4">Withdraw</h2>
        <form>
          <div className="mb-4">
            <label className="block md:text-[16px] text-[14px] font-medium mb-1">
              Enter Agent ID/User Number <span className="text-black">*</span>
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-400 rounded bg-gray-200 focus:outline-blue-600"
            />
            <p className="text-[10px] mt-1">
              Name : Nancy Himel /
              <span className="text-red-600">Invalid ID</span>
            </p>
          </div>

          <div className="mb-4">
            <label className="block md:text-[16px] text-[14px] font-medium mb-1">
              Enter Amount <span className="text-black">*</span>
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-400 rounded bg-gray-200 focus:outline-blue-600"
            />
          </div>

          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default DepositWithdraw;
