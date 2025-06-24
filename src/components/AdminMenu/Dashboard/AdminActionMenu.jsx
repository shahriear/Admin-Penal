import React, { useState, useRef, useEffect } from 'react';
import UserInfo from './UserInfo';
import { Card, CardContent } from '../../ui/card';

const AdminActionMenu = () => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = event => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={wrapperRef}>
      {/* আগের UserInfo component-কে ক্লিকযোগ্য করলাম */}
      <div onClick={() => setOpen(!open)} className="cursor-pointer">
        <UserInfo size="lg" />
      </div>

      {/* Popup menu */}
      {open && (
        <Card className="absolute z-50 mt-2 w-64 right-0 shadow-lg">
          <CardContent className="space-y-1 p-2">
            <ActionItem
              icon="🔄"
              label="Change Name"
              onClick={() => alert('Change Name')}
            />
            <ActionItem
              icon="🔒"
              label="Change Password"
              onClick={() => alert('Change Password')}
            />
            <ActionItem
              icon="➕"
              label="Create New Admin"
              onClick={() => alert('Create New Admin')}
            />
            <ActionItem
              icon="🗑️"
              label="Delete Admin"
              onClick={() => alert('Delete Admin')}
            />
          </CardContent>
        </Card>
      )}
    </div>
  );
};

const ActionItem = ({ icon, label, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center w-full px-3 py-2 text-sm text-left rounded hover:bg-gray-100 transition"
  >
    <span className="mr-2 text-lg">{icon}</span>
    {label}
  </button>
);

export default AdminActionMenu;
