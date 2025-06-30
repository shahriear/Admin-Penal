import React from 'react';

const UserInfo = ({ size = 'md', className = '' }) => {
  const sizeMap = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
    xl: 'w-12 h-12',
  };

  const imageClass = sizeMap[size] || sizeMap['md'];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src="/image/profile.jpg"
        alt="profile"
        className={`${imageClass} rounded-full object-cover`}
      />
      <div className="text-left">
        <div className="font-dm md:font-[600] md:text-[12px] font-[600] text-[12px]">
          Nancy Himel
        </div>
        <div className="font-dm md:font-[300] md:text-[8px] font-[300] text-[8px] text-gray-500">
          Admin User
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
