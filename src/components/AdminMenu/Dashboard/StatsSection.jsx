import React from 'react';

const StatsSection = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        'Today’s Deposit',
        'Today’s Withdraw',
        'Total Deposit',
        'Total Withdraw',
      ].map(label => (
        <div className="bg-[#DFDFDF] p-4 rounded" key={label}>
          <p className="font-dm md:font-[400] md:text-[12px] font-[400] text-[14px] text-gray-600">
            {label}
          </p>
          <h3 className="font-dm md:font-[500] md:text-[20px] font-[500] text-[22px]">
            $16,249.00
          </h3>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
