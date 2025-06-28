import React from 'react';
import { Button } from '../../ui/Button';
import { cn } from '../../../lib/utils';
import { Link } from 'react-router-dom';

// import { cn } from '../../lib/utils';

const menuItems = [
  {
    title: 'Dashboard',
    description: "Here's today’s report & performances",
  },
  {
    title: 'Member List',
    description: 'Here is your all User',
  },
  {
    title: 'Territory Agent List',
    description: 'Here is your all Territory Agent',
  },
  {
    title: 'Master Agent List',
    description: 'Here is your all Master Agent',
  },
  {
    title: 'Deposit & Withdraw',
    description: 'Here you deposit & withdraw to master agent ,agent & user',
  },
  {
    title: 'Deposit History',
    description: 'Here is all Deposit History ',
  },
  {
    title: 'Withdraw History',
    description: 'Here is all withdraw history',
  },
];

const Sidebar = ({ active, setActive, menuOpen, setMenuOpen }) => {
  return (
    <>
      <div
        className={cn(
          'fixed md:static z-50 transition-all duration-300',
          'w-full h-full top-0 left-0',
          'bg-[#323232] md:bg-[#d6d4d4]',
          'flex flex-col',
          'items-center justify-between md:justify-start',
          'p-6 md:w-64 lg:w-1/5 md:h-full',
          menuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        )}
      >
        {/* Title */}
        <div className="text-5xl  font-dm font-[700] text-[48px] pt-5 text-white md:text-black hidden md:block">
          Admin
        </div>

        {/* Menu Items */}
        <div className="flex flex-col gap-4 w-full pt-20">
          {menuItems.map(({ title }) => (
            <Button
              key={title}
              onClick={() => {
                setActive(title);
                setMenuOpen(false);
              }}
              className={cn(
                'w-full text-center font-dm md:font-[600] md:text-[16px]  font-[700] text-[20px] py-3 rounded-md transition-colors duration-200',
                active === title
                  ? 'bg-white md:bg-black text-black md:text-white'
                  : 'bg-[#323232] text-white hover:bg-white hover:text-black md:bg-[#d6d4d4] md:text-black md:hover:bg-black md:hover:text-white'
              )}
            >
              {title}
            </Button>
          ))}
        </div>

        {/* Log Out */}
        <Link
          to={'/'}
          className={cn(
            'md:mt-60 w-full py-3 rounded-md transition-colors duration-200  font-dm font-[600] text-[16px]',
            'bg-black text-white hover:bg-[#f0f0f0] hover:text-black',
            'md:bg-black md:text-white md:hover:bg-white md:hover:text-black text-center'
          )}
          onClick={() => {
            // Optional logout
          }}
        >
          Log Out
        </Link>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
};

export { menuItems };

export default Sidebar;
