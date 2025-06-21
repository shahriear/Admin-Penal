import React from 'react';

const UserInfo = ({ imageSize = 10, className = '' }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src="/image/profile.jpg"
        alt="profile"
        className={`w-${imageSize} h-${imageSize} rounded-full object-cover`}
      />
      <div className="text-left">
        <div className="font-semibold text-sm md:text-base">Shuvo</div>
        <div className="text-xs md:text-sm text-gray-500">Admin User</div>
      </div>
    </div>
  );
};

export default UserInfo;
