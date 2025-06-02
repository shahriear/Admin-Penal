import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import { Card, CardContent } from './components/ui/card';

const App = () => {
  const [active, setActive] = useState('Dashboard');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row h-screen w-full">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 bg-[#d6d4d4]">
        <h1 className="text-lg font-bold">Admin</h1>
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
      <div className="flex-1 bg-white p-4 md:p-6 overflow-auto">
        <div className="flex justify-end items-center mb-4">
          <div className="text-right">
            <div className="font-semibold">Shuvo</div>
            <div className="text-sm text-gray-500">Admin User</div>
          </div>
        </div>
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
  );
};

export default App;
