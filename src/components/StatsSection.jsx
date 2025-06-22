import React from 'react';

const StatsSection = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {[
        'Today’s Deposit',
        'Today’s Withdraw',
        'Total Deposit',
        'Total Withdraw',
      ].map(label => (
        <div className="bg-[#d9d9d9] p-4 rounded" key={label}>
          <p className="text-sm text-gray-600">{label}</p>
          <h3 className="text-lg font-bold">$16,249.00</h3>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
