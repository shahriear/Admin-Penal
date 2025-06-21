import React from 'react';

const UserInfo = ({ size = 'md', className = '' }) => {
  // Tailwind compatible fixed size classes
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
        <div className="font-semibold text-sm md:text-base">Shuvo</div>
        <div className="text-xs md:text-sm text-gray-500">Admin User</div>
      </div>
    </div>
  );
};

export default UserInfo;
