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
import Sidebar from './AdminMenu/Dashboard/Sidebar';
import AdminActionMenu from './AdminMenu/Dashboard/AdminActionMenu';
import BalanceModal from './Withdraw Balance/BalanceModal';
import { menuItems } from '../constants/menuItems';

const Dashboard = () => {
  const [active, setActive] = useState('Dashboard');
  const [menuOpen, setMenuOpen] = useState(false);

  const activeItem = menuItems.find(item => item.title === active);
  const [balanceModalOpen, setBalanceModalOpen] = useState(false);

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
                {/* Available Balance */}

                {/* <div className="flex flex-wrap sm:flex-nowrap justify-between items-center gap-3 mb-4 p-4 bg-[#D9D9D9] rounded">
                  <div className="font-dm font[600] md:text-[18px] text-[17px]">
                    Available Balance:
                    <span className="font-[600] md:text-[18px] text-[17px]">
                      $24930.00
                    </span>
                  </div>
                  <button
                    onClick={() => setBalanceModalOpen(true)}
                    className="bg-black text-white md:px-4 md:py-3 px-3 py-2 rounded font-dm font[500] md:text-[16px] text-[13px] whitespace-nowrap"
                  >
                    +/- Balance
                  </button>
                </div> */}

                {/* Modal Call */}
                <BalanceModal
                  isOpen={balanceModalOpen}
                  onClose={() => setBalanceModalOpen(false)}
                />

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
