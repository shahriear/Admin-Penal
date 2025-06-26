import React, { useState } from 'react';
import { FaUserEdit, FaPenAlt, FaPenNib } from 'react-icons/fa';
import { LuCrosshair } from 'react-icons/lu';
import EditAgentModal from '../TorrityModal/EditAgentModal';
import AddTerritoryAgentModal from '../TorrityModal/AddTerritoryAgentModal';

const TorrityAgentList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const agentsPerPage = 10;
  const [showModal, setShowModal] = useState(false);
  const [editAgent, setEditAgent] = useState(null);

  const members = [
    {
      account: '01773647834',
      password: '@#boomST25@#',
      balance: '$12,000.00',
      status: 'Active',
      blocked: false,
    },
    {
      account: '01582365489',
      password: 'Test@123',
      balance: '$6,500.00',
      status: 'Active',
      blocked: false,
    },
    {
      account: '01671234567',
      password: 'Agent123',
      balance: '$9,000.00',
      status: 'Active',
      blocked: false,
    },
    // ... (আরো ডাটা রাখতে পারো)
  ];

  const filteredAgents = members.filter(m => m?.account?.includes(searchTerm));
  const totalPages = Math.ceil(filteredAgents.length / agentsPerPage);
  const startIndex = (currentPage - 1) * agentsPerPage;
  const currentAgents = filteredAgents.slice(
    startIndex,
    startIndex + agentsPerPage
  );

  const handleAddAgent = data => {
    console.log('New Territory Agent:', data);
    // নতুন এজেন্ট যোগ করার লজিক এখানে যাবে
  };

  return (
    <div className="bg-white rounded">
      {/* Top Bar */}
      <div className="flex justify-end items-center mb-4 gap-4 overflow-x-auto whitespace-nowrap">
        <div className="flex gap-2 w-fit md:w-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="border pr-1 md:pr-10 pl-2 py-2 rounded font-dm font-[400] text-[16px] bg-[#D9D9D9] min-w-[150px]"
            />
            <span className="absolute inset-y-0 right-3 flex items-center text-gray-700">
              <LuCrosshair size={17} />
            </span>
          </div>

          <button
            className="bg-black text-white md:px-5 px-2 py-2 rounded font-dm md:font-[600] md:text-[16px] font-[600] text-[14px] whitespace-nowrap"
            onClick={() => setShowModal(true)}
          >
            Add TeritorryAgent
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto pb-2">
        <div className="min-w-[850px]">
          {/* Head */}
          <div className="grid grid-cols-[0.8fr_0.8fr_0.8fr_0.8fr_2fr] bg-[#C3C2C2] p-2 rounded text-center font-dm text-[10px] md:text-[14px] font-[500]">
            <div>ID</div>
            <div>Password</div>
            <div>Balance</div>
            <div>Status</div>
            <div className="px-10">Action</div>
          </div>

          {/* Body */}
          <div className="space-y-2 mt-2">
            {currentAgents.map((m, index) => (
              <div
                key={index}
                className="grid grid-cols-[0.8fr_0.8fr_0.8fr_0.9fr_2fr] gap-1 items-center bg-gray-100 rounded px-2 py-2 text-center font-dm text-[10px] md:text-[14px]"
              >
                <div>{m.account}</div>
                <div>{m.password}</div>
                <div className="flex items-center justify-center gap-1">
                  {m.balance}
                  <FaPenNib className="text-gray-600 md:text-sm text-[9px] cursor-pointer ml-1" />
                </div>
                <div>
                  <span
                    className={`px-2 py-0.5 rounded text-white ${
                      m.status === 'Active' ? 'bg-green-600' : 'bg-yellow-500'
                    }`}
                  >
                    {m.status}
                  </span>
                </div>
                <div className="flex gap-1 justify-center items-center flex-wrap px-10">
                  <button
                    onClick={() => setEditAgent(m)}
                    className="min-w-[90px] bg-blue-500 text-white px-2 py-1 rounded flex items-center justify-center text-[10px] md:text-[12px]"
                  >
                    <FaUserEdit className="mr-1 text-[10px] md:text-base" />
                    Profile Edit
                  </button>
                  <button className="min-w-[90px] bg-blue-600 text-white px-2 py-1 rounded flex items-center justify-center text-[10px] md:text-[12px]">
                    <FaPenAlt className="mr-1 md:text-sm" />
                    Lock Up
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-end mt-6 mb-4 pr-4">
        <div className="flex items-center gap-2 font-semibold">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-2 text-lg"
          >
            ←
          </button>
          <span className="text-sm text-gray-700">
            {currentPage.toString().padStart(2, '0')}
          </span>
          <button
            onClick={() =>
              setCurrentPage(prev => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-3 py-2 text-lg"
          >
            →
          </button>
        </div>
      </div>

      {/* Modals */}
      {editAgent && (
        <EditAgentModal
          agent={editAgent}
          onClose={() => setEditAgent(null)}
          onUpdate={(id, field, value) => {
            // update logic
          }}
          onDelete={id => {
            // delete logic
            setEditAgent(null);
          }}
        />
      )}

      {showModal && (
        <AddTerritoryAgentModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onConfirm={handleAddAgent}
        />
      )}
    </div>
  );
};

export default TorrityAgentList;
