import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { Card, CardContent } from './ui/card';
import UserInfo from './UserInfo';

const Dashboard = () => {
  const [active, setActive] = useState('Dashboard');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row h-screen w-full">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 md:bg-[#d6d4d4] mb-12">
        <button
          className="text-2xl font-bold"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Sidebar Component */}
      <Sidebar
        active={active}
        setActive={setActive}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      {/* Right Section */}
      <div className="flex-1">
        {/* Admin User for Desktop */}
        <div className="hidden md:flex bg-[#D9D9D961] justify-end items-center mb-10 pr-14 py-4">
          <UserInfo imageSize={10} />
        </div>

        {/* Admin User for Mobile */}
        <div className="md:hidden absolute top-4 right-6">
          <UserInfo imageSize={8} />
        </div>

        {/* Content Section */}
        <div className="bg-white p-4 md:p-6 overflow-auto">
          <Card>
            <CardContent className="p-4 md:p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4">{active}</h2>
              <p>
                This is the {active} section. Add your component or data view
                here.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
