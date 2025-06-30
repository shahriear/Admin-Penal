import React, { useState } from 'react';
import {
  FaUserEdit,
  FaPenNib,
  FaArrowRight,
  FaArrowLeft,
} from 'react-icons/fa';
import { LuCrosshair } from 'react-icons/lu';
import LockConfirmModal from '../MemberList/LockConfirmModal';
import UnblockConfirmModal from '../MemberList/UnblockConfirmModal';
import EditMemberModal from '../MemberList/EditMemberModal';
import AddUserModal from '../MemberList/AddUserModal';

const MemberList = () => {
  const [toastMsg, setToastMsg] = useState('');
  const [addUserOpen, setAddUserOpen] = useState(false);
  const [members, setMembers] = useState([
    {
      id: 1,
      account: '01773647834',
      password: '@#boomST25@#',
      balance: '$12,000.00',
      status: 'Active',
      agent: '1722350',
      blocked: false,
    },
    {
      id: 2,
      account: '01773647834',
      password: '@#boomST25@#',
      balance: '$12,000.00',
      status: 'Blocked',
      agent: '1722350',
      blocked: true,
    },
    {
      id: 3,
      account: '01773647834',
      password: '@#boomST25@#',
      balance: '$12,000.00',
      status: 'Active',
      agent: '1722350',
      blocked: false,
    },
  ]);

  const [selectedMember, setSelectedMember] = useState(null);
  const [lockModalOpen, setLockModalOpen] = useState(false);
  const [unblockModalOpen, setUnblockModalOpen] = useState(false);
  const [editMember, setEditMember] = useState(null);

  const [editBalanceId, setEditBalanceId] = useState(null);

  const handleBlock = member => {
    setSelectedMember(member);
    setLockModalOpen(true);
  };

  const handleUnblock = member => {
    setSelectedMember(member);
    setUnblockModalOpen(true);
  };

  const confirmBlock = () => {
    setMembers(prev =>
      prev.map(m =>
        m.id === selectedMember.id
          ? { ...m, blocked: true, status: 'Blocked' }
          : m
      )
    );
    setLockModalOpen(false);
    setSelectedMember(null);
  };

  const confirmUnblock = () => {
    setMembers(prev =>
      prev.map(m =>
        m.id === selectedMember.id
          ? { ...m, blocked: false, status: 'Active' }
          : m
      )
    );
    setUnblockModalOpen(false);
    setSelectedMember(null);
  };

  const handleFieldUpdate = (id, field, value) => {
    setMembers(prev =>
      prev.map(m => (m.id === id ? { ...m, [field]: value } : m))
    );
  };

  const handleDeleteMember = id => {
    setMembers(prev => prev.filter(m => m.id !== id));
    setEditMember(null);
  };

  const handleAddUser = newUser => {
    const newId = members.length ? members[members.length - 1].id + 1 : 1;
    setMembers(prev => [
      ...prev,
      {
        id: newId,
        account: newUser.number,
        password: newUser.password,
        agent: newUser.agent,
        amount: newUser.amount,
        status: 'Active',
        balance: `$${newUser.amount || '0.00'}`,
        blocked: false,
      },
    ]);
  };

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentMembers = members.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(members.length / usersPerPage);

  return (
    <div className="bg-white rounded pb-10">
      {toastMsg && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 w-[90%] max-w-xs bg-green-600 text-white text-sm text-center px-4 py-2 rounded shadow-lg z-[9999] animate-slideIn">
          {toastMsg}
        </div>
      )}

      {/* Top Bar */}
      <div className="w-full flex justify-end items-center mb-4 px-2">
        <div className="flex flex-wrap gap-2 items-center">
          {/* Search  */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="border pr-  pl-5 py-2 rounded font-dm text-[16px] sm:text-[16px] bg-[#D9D9D9] min-w-[150px] sm:min-w-[200px]"
            />
            <span className="absolute inset-y-0 right-3 flex items-center text-gray-700">
              <LuCrosshair size={17} />
            </span>
          </div>

          {/* Add User Button */}
          <button
            onClick={() => setAddUserOpen(true)}
            className="bg-black text-white px-4 sm:px-5 py-2 rounded font-dm font-[600] text-[14px] sm:text-[16px] whitespace-nowrap"
          >
            Add User
          </button>
        </div>
      </div>

      {/* Member Table */}
      <div className="overflow-x-auto">
        <div className="min-w-[850px]">
          <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1.6fr] bg-[#C3C2C2] p-2 rounded text-center font-dm font-[500] text-[10px] md:text-[14px]">
            <div>Account</div>
            <div>Password</div>
            <div>Balance</div>
            <div>Status</div>
            <div>Agent Number</div>
            <div>Action</div>
          </div>

          <div className="space-y-2 mt-2">
            {currentMembers.map((m, index) => (
              <div
                key={index}
                className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1.6fr] gap-1 items-center bg-gray-100 rounded p-2 text-center font-dm font-[400] text-[10px] md:text-[14px]"
              >
                <div>{m.account}</div>
                <div>{m.password}</div>
                <div
                  className="flex items-center justify-center gap-1 cursor-pointer"
                  onClick={() => setEditBalanceId(m.id)}
                >
                  {editBalanceId === m.id ? (
                    <input
                      type="text"
                      value={m.balance.replace('$', '')}
                      onChange={e =>
                        handleFieldUpdate(m.id, 'balance', `$${e.target.value}`)
                      }
                      onBlur={() => setEditBalanceId(null)}
                      onKeyDown={e => {
                        if (e.key === 'Enter') setEditBalanceId(null);
                      }}
                      className="border w-[70px] text-center px-1 text-[16px] md:text-[14px]"
                      autoFocus
                    />
                  ) : (
                    <span>{m.balance}</span>
                  )}
                  <FaPenNib className="text-gray-600 md:text-[13px] text-[12px] cursor-pointer ml-1" />
                </div>

                <div>
                  <span
                    className={`px-2 py-0.5 rounded text-white text-[10px] md:text-xs ${
                      m.status === 'Active' ? 'bg-green-600' : 'bg-yellow-500'
                    }`}
                  >
                    {m.status}
                  </span>
                </div>
                <div>{m.agent}</div>
                <div className="flex gap-1 justify-center items-center flex-nowrap">
                  <button
                    className="min-w-[90px] bg-blue-500 text-white px-2 py-1 rounded flex items-center justify-center whitespace-nowrap text-[10px] md:text-[12px]"
                    onClick={() => setEditMember(m)}
                  >
                    <FaUserEdit className="mr-1 text-[12px] md:text-base" />
                    Profile Edit
                  </button>
                  {!m.blocked ? (
                    <button
                      onClick={() => handleBlock(m)}
                      className="min-w-[90px] bg-blue-600 text-white px-2 py-1 rounded"
                    >
                      Lock Up
                    </button>
                  ) : (
                    <button
                      onClick={() => handleUnblock(m)}
                      className="min-w-[90px] bg-yellow-500 text-black px-2 py-1 rounded"
                    >
                      Unblock
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-end mt-10 gap-2 items-center">
        <button
          onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className="px-2 py-1 text-[12px] rounded bg-gray-200 disabled:opacity-50"
        >
          <FaArrowLeft />
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-2 text-[11px] rounded ${
              page === currentPage ? ' bg-blue-500 text-white' : 'bg-gray-300'
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-2 py-1 text-[12px] rounded bg-gray-200 disabled:opacity-50"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Modals */}
      <LockConfirmModal
        isOpen={lockModalOpen}
        onClose={() => setLockModalOpen(false)}
        onConfirm={confirmBlock}
      />
      <UnblockConfirmModal
        isOpen={unblockModalOpen}
        onClose={() => setUnblockModalOpen(false)}
        onConfirm={confirmUnblock}
      />
      {editMember && (
        <EditMemberModal
          member={editMember}
          onClose={() => setEditMember(null)}
          onUpdate={handleFieldUpdate}
          onDelete={handleDeleteMember}
        />
      )}
      <AddUserModal
        isOpen={addUserOpen}
        onClose={() => setAddUserOpen(false)}
        onConfirm={handleAddUser}
        onSuccess={() => {
          setToastMsg('User added successfully!');
          setTimeout(() => setToastMsg(''), 3000);
        }}
      />
    </div>
  );
};

export default MemberList;
