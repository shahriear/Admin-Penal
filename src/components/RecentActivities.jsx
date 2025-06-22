import React from 'react';

const RecentActivities = () => {
  return (
    <div className="bg-white p-4 rounded">
      <h4 className="font-bold mb-4 text-[12px] md:text-base">
        Recent Activities
      </h4>

      <div className="space-y-2">
        {/* Row 1 */}
        <div className="bg-gray-100 px-2 py-1 rounded grid grid-cols-4 text-[10px] items-center">
          <div>22.09.2023</div>
          <div>TXDFGC2ORRN</div>
          <div>$120000</div>
          <div className="text-green-600 font-semibold text-right">Done</div>
        </div>

        {/* Row 2 */}
        <div className="bg-gray-100 px-2 py-1 rounded grid grid-cols-4 text-[10px] items-center">
          <div>22.09.2023</div>
          <div className="col-span-3">
            New User - Dhaka - 173244 - 770221 - 01744454542
          </div>
        </div>

        {/* Empty Rows (Like the screenshot) */}
        <div className="bg-gray-100 h-8 rounded" />
        <div className="bg-gray-100 h-8 rounded" />
        <div className="bg-gray-100 h-8 rounded" />
      </div>
    </div>
  );
};

export default RecentActivities;
