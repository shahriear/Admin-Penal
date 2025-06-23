import React from 'react';

const SummaryBar = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 text-center bg-white p-4 mb-4  rounded">
      {['Territory Agent', 'Master Agent', 'Agent', 'User'].map(type => (
        <div
          key={type}
          className="bg-gray-100 p-2 rounded shadow-sm text-sm font-medium"
        >
          Total {type} : <span className="text-black font-semibold">25</span>
        </div>
      ))}
    </div>
  );
};

export default SummaryBar;
