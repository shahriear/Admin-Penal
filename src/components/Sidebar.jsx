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
      {/* Sidebar Wrapper */}
      <div
        className={cn(
          'fixed md:static z-50 transition-all duration-300',

          // Layout
          'w-full h-full top-0 left-0',

          // Background color
          'bg-[#323232] md:bg-[#d6d4d4]',

          // Flex layout for both
          'flex flex-col',

          // Center on mobile, normal on desktop
          'items-center justify-between md:justify md:justify-start',

          // Width and padding
          'p-6 md:w-64 lg:w-1/5 md:h-full',

          // Slide-in animation
          menuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        )}
      >
        {/* Title */}
        <div className="text-5xl font-bold  pt-5 text-white md:text-black hidden md:block">
          Admin
        </div>

        {/* Menu Items */}
        <div className="flex flex-col gap-4 w-full pt-20">
          {menuItems.map(item => (
            <Button
              key={item}
              onClick={() => {
                setActive(item);
                setMenuOpen(false);
              }}
              className={cn(
                'w-full text-center font-semibold py-3 rounded-md transition-colors duration-200',

                // Color logic
                active === item
                  ? 'bg-white md:bg-black text-black md:text-white'
                  : 'bg-[#323232] text-white hover:bg-white hover:text-black md:bg-[#d6d4d4] md:text-black md:hover:bg-black md:hover:text-white'
              )}
            >
              {item}
            </Button>
          ))}
        </div>

        {/* Log Out Button */}
        <Button
          className={cn(
            ' md:mt-60 w-full py-3 rounded-md transition-colors duration-200',
            'bg-black text-white hover:bg-[#f0f0f0] hover:text-black',
            'md:bg-black md:text-white md:hover:bg-white md:hover:text-black'
          )}
          onClick={() => {
            // Optional logout
          }}
        >
          Log Out
        </Button>
      </div>

      {/* Overlay for mobile */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
