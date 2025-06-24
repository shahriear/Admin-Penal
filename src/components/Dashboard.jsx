import React, { useState } from 'react';
// import { menuItems } from './Sidebar';
import { CardContent } from './ui/card';
import UserInfo from './AdminMenu/Dashboard/UserInfo';
import StatsSection from './AdminMenu/Dashboard/StatsSection';
import SummaryBar from './AdminMenu/Dashboard/SummaryBar';
import RecentActivities from './AdminMenu/Dashboard/RecentActivities';
import MemberList from './AdminMenu/MemberList';
import TorrityAgentList from './AdminMenu/TorrityAgentList';
import MasterAgent from './AdminMenu/MasterAgent';
import DepositWithdraw from './AdminMenu/DepositWithdraw';
import DepositHistory from './AdminMenu//DepositHistory';
import WithdrawHistory from './AdminMenu/WithdrawHistory';
import Sidebar, { menuItems } from './AdminMenu/Dashboard/Sidebar';
import AdminActionMenu from './AdminMenu/Dashboard/AdminActionMenu';

const Dashboard = () => {
  const [active, setActive] = useState('Dashboard');
  const [menuOpen, setMenuOpen] = useState(false);

  const activeItem = menuItems.find(item => item.title === active);

  return (
    <div className="flex flex-col md:flex-row h-screen w-full">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 md:bg-[#d6d4d4] mb-2">
        <button
          className="text-3xl font-bold"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Sidebar */}
      <Sidebar
        active={active}
        setActive={setActive}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      {/* Right Content */}
      <div className="flex-1">
        {/* Topbar - Desktop */}
        <div className="hidden md:flex bg-[#D9D9D961] justify-end items-center pr-14 py-4">
          <AdminActionMenu />
        </div>

        {/* Topbar - Mobile */}
        <div className="md:hidden absolute top-4 right-6">
          <AdminActionMenu />
        </div>

        {/* Main Content */}
        <div className="bg-white p- md:p-6 ">
          <CardContent className="p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-dm font-[400] mb-2 ">
              {active}
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              {activeItem?.description}
            </p>

            {active === 'Dashboard' && (
              <>
                <StatsSection />
                <SummaryBar />
                <RecentActivities />
              </>
            )}

            {active === 'Member List' && <MemberList />}

            {active === 'Territory Agent List' && <TorrityAgentList />}
            {active === 'Master Agent List' && <MasterAgent />}
            {active === 'Deposit & Withdraw' && <DepositWithdraw />}
            {active === 'Deposit History' && <DepositHistory />}
            {active === 'Withdraw History' && <WithdrawHistory />}
          </CardContent>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
