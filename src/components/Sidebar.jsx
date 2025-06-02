import React from 'react';
import { Button } from './Button';
import { cn } from '../lib/utils';

const menuItems = [
  'Dashboard',
  'Member List',
  'Deposit & Withdraw',
  'Deposit History',
  'Wingo',
  '5D',
  'k3',
];

const Sidebar = ({ active, setActive, menuOpen, setMenuOpen }) => {
  return (
    <>
      {/* Sidebar */}
      <div
        className={cn(
          'fixed md:static z-50 top-0 left-0 h-full bg-[#d6d4d4] p-4 flex flex-col justify-between transition-transform duration-300 w-64 md:w-1/4 lg:w-1/5',
          menuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        )}
      >
        <div>
          <div className="hidden md:block text-xl font-bold mb-6 text-center">
            Admin
          </div>
          <div className="flex flex-col gap-2">
            {menuItems.map(item => (
              <Button
                key={item}
                onClick={() => {
                  setActive(item);
                  setMenuOpen(false); // close on mobile
                }}
                className={cn(
                  'w-full justify-start text-left',
                  active === item
                    ? 'bg-black text-white'
                    : 'hover:bg-black hover:text-white'
                )}
              >
                {item}
              </Button>
            ))}
          </div>
        </div>
        <Button
          className=" bg-black text-white text-center mt-4 cursor-pointer "
          onClick={() => {
            // Optional: handle logout
          }}
        >
          Log Out
        </Button>
      </div>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
