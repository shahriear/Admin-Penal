// import React, { useState } from 'react';
// import {
//   FaUserEdit,
//   FaPenAlt,
//   FaPenNib,
//   FaArrowLeft,
//   FaArrowRight,
// } from 'react-icons/fa';
// import { LuCrosshair } from 'react-icons/lu';
// import LockConfirmModal from '../MemberList/LockConfirmModal';
// import UnblockConfirmModal from '../MemberList/UnblockConfirmModal';
// // import EditMasterAgentModal from '../MasterAgentList/EditMasterAgentModal';
// import AddAgentModal from '../MasterAgentList/AddAgentModal';
// import AgentSubListModal from '../MasterAgentList/AgentSubListModal';

// const MasterAgentList = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [blockedAgent, setBlockedAgent] = useState(null);
//   const [confirmType, setConfirmType] = useState('');
//   const [viewOnlySubList, setViewOnlySubList] = useState(false);
//   // const [selectedAgent, setSelectedAgent] = useState(null);
//   // const [editModalOpen, setEditModalOpen] = useState(false);
//   const [addModalOpen, setAddModalOpen] = useState(false);

//   const [subAgentModalOpen, setSubAgentModalOpen] = useState(false);
//   const [subAgents, setSubAgents] = useState([]);

//   const [currentPage, setCurrentPage] = useState(1);
//   const agentsPerPage = 8;

//   const [members, setMembers] = useState([
//     {
//       id: 1,
//       account: '01773647834',
//       name: 'Nancy Himel',
//       password: '@#boomST25@#',
//       balance: '$12,000.00',
//       status: 'Active',
//       blocked: false,
//     },
//     {
//       id: 2,
//       account: '01811223344',
//       name: 'Hasan Mahmud',
//       password: 'Test@123',
//       balance: '$8,000.00',
//       status: 'Active',
//       blocked: false,
//     },
//     {
//       id: 3,
//       account: '01773647834',
//       name: 'Nancy Himel',
//       password: '@#boomST25@#',
//       balance: '$12,000.00',
//       status: 'Active',
//       blocked: false,
//     },
//     {
//       id: 4,
//       account: '01811223344',
//       name: 'Hasan Mahmud',
//       password: 'Test@123',
//       balance: '$8,000.00',
//       status: 'Active',
//       blocked: false,
//     },
//     {
//       id: 5,
//       account: '01773647834',
//       name: 'Nancy Himel',
//       password: '@#boomST25@#',
//       balance: '$12,000.00',
//       status: 'Active',
//       blocked: false,
//     },
//     {
//       id: 6,
//       account: '01811223344',
//       name: 'Hasan Mahmud',
//       password: 'Test@123',
//       balance: '$8,000.00',
//       status: 'Active',
//       blocked: false,
//     },
//     {
//       id: 7,
//       account: '01773647834',
//       name: 'Nancy Himel',
//       password: '@#boomST25@#',
//       balance: '$12,000.00',
//       status: 'Active',
//       blocked: false,
//     },
//     {
//       id: 8,
//       account: '01811223344',
//       name: 'Hasan Mahmud',
//       password: 'Test@123',
//       balance: '$8,000.00',
//       status: 'Active',
//       blocked: false,
//     },
//     {
//       id: 9,
//       account: '01773647834',
//       name: 'Nancy Himel',
//       password: '@#boomST25@#',
//       balance: '$12,000.00',
//       status: 'Active',
//       blocked: false,
//     },
//     {
//       id: 10,
//       account: '01811223344',
//       name: 'Hasan Mahmud',
//       password: 'Test@123',
//       balance: '$8,000.00',
//       status: 'Active',
//       blocked: false,
//     },
//   ]);

//   const filteredMembers = members.filter(m => m.account.includes(searchTerm));

//   const indexOfLastAgent = currentPage * agentsPerPage;
//   const indexOfFirstAgent = indexOfLastAgent - agentsPerPage;
//   const currentAgents = filteredMembers.slice(
//     indexOfFirstAgent,
//     indexOfLastAgent
//   );
//   const totalPages = Math.ceil(filteredMembers.length / agentsPerPage);

//   const handlePageChange = page => {
//     setCurrentPage(page);
//   };

//   const handleBlockToggle = (agent, type) => {
//     setBlockedAgent(agent);
//     setConfirmType(type);
//   };

//   const confirmBlockToggle = () => {
//     const updated = members.map(m =>
//       m.id === blockedAgent.id
//         ? {
//             ...m,
//             blocked: confirmType === 'block',
//             status: confirmType === 'block' ? 'Blocked' : 'Active',
//           }
//         : m
//     );
//     setMembers(updated);
//     setBlockedAgent(null);
//   };

//   const handleEditProfile = agent => {
//     setSelectedAgent(agent);
//     setEditModalOpen(true);
//   };

//   // const handleUpdateAgent = updatedAgent => {
//   //   const updated = members.map(m =>
//   //     m.id === updatedAgent.id ? updatedAgent : m
//   //   );
//   //   setMembers(updated);
//   // };

//   // const handleDeleteAgent = agentToDelete => {
//   //   const updated = members.filter(m => m.id !== agentToDelete.id);
//   //   setMembers(updated);
//   //   setEditModalOpen(false);
//   // };

//   return (
//     <div className="bg-white md:p-6 rounded">
//       <div className="flex justify-between flex-wrap items-center mb-4 gap-3">
//         {/* Search Input */}
//         <div className="relative flex-1 min-w-[150px] max-w-sm">
//           <input
//             type="text"
//             placeholder="Search"
//             value={searchTerm}
//             onChange={e => setSearchTerm(e.target.value)}
//             className="w-full border pr-8 pl-4 py-2 rounded font-dm text-[16px] bg-[#D9D9D9]"
//           />
//           <span className="absolute inset-y-0 right-3 flex items-center text-gray-700">
//             <LuCrosshair size={17} />
//           </span>
//         </div>

//         {/* Add Agent Button */}
//         {!viewOnlySubList && (
//           <button
//             className="bg-black text-white px-5 py-2 rounded font-dm font-[600] text-[14px] sm:text-[16px] whitespace-nowrap"
//             onClick={() => setAddModalOpen(true)}
//           >
//             Add Agent
//           </button>
//         )}
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto pb-2">
//         <div className="min-w-[850px]">
//           <div className="grid grid-cols-[0.8fr_0.8fr_0.8fr_0.8fr_2fr] bg-[#C3C2C2] p-2 rounded text-center font-dm text-[10px] md:text-[14px] font-[500]">
//             <div>ID</div>
//             <div>Password</div>
//             <div>Balance</div>
//             <div>Status</div>
//             <div className="px-10">Action</div>
//           </div>

//           <div className="space-y-2 mt-2">
//             {currentAgents.map((m, index) => (
//               <div
//                 key={m.id}
//                 className="grid grid-cols-[0.8fr_0.8fr_0.8fr_0.9fr_2fr] gap-1 items-center bg-gray-100 rounded px-2 py-2 text-center font-dm text-[10px] md:text-[14px]"
//               >
//                 <div>{m.account}</div>
//                 <div>{m.password}</div>
//                 <div className="flex items-center justify-center gap-1">
//                   {m.balance}
//                   <FaPenNib className="text-gray-600 text-[9px] md:text-sm cursor-pointer ml-1" />
//                 </div>
//                 <div>
//                   <span
//                     className={`px-2 py-0.5 rounded text-white text-[10px] md:text-xs ${
//                       m.status === 'Active' ? 'bg-green-600' : 'bg-[#FDAC29]'
//                     }`}
//                   >
//                     {m.status}
//                   </span>
//                 </div>
//                 <div className="flex gap-2 justify-center items-center px-10 overflow-x-auto whitespace-nowrap scrollbar-hide">
//                   <button
//                     className="min-w-[90px] bg-blue-500 text-white px-2 py-1 rounded flex items-center justify-center"
//                     onClick={() => handleEditProfile(m)}
//                   >
//                     <FaUserEdit className="mr-1" />
//                     Profile Edit
//                   </button>

//                   <button
//                     className={`min-w-[90px] ${
//                       m.blocked ? 'bg-[#FDAC29]' : 'bg-blue-600'
//                     } text-white px-2 py-1 rounded flex items-center justify-center`}
//                     onClick={() =>
//                       handleBlockToggle(m, m.blocked ? 'unblock' : 'block')
//                     }
//                   >
//                     <FaPenAlt className="mr-1" />
//                     {m.blocked ? 'Unblock' : 'Lock Up'}
//                   </button>

//                   <button
//                     className="min-w-[90px] bg-blue-700 text-white px-2 py-1 rounded flex items-center justify-center"
//                     onClick={() => {
//                       const subList = [
//                         {
//                           account: '01711223344',
//                           password: 'pass123',
//                           balance: '$5,000',
//                           status: 'Active',
//                         },
//                         {
//                           account: '01799887766',
//                           password: 'sub@456',
//                           balance: '$4,200',
//                           status: 'Blocked',
//                         },
//                       ];
//                       setSubAgents(subList);
//                       setSubAgentModalOpen(true);
//                     }}
//                   >
//                     See Agent List
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       {/* Pagination */}
//       <div className="flex justify-end mt-10 gap-2 items-center">
//         <button
//           onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
//           disabled={currentPage === 1}
//           className="px-2 py-1 text-[12px] rounded bg-gray-200 disabled:opacity-50"
//         >
//           <FaArrowLeft />
//         </button>

//         {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
//           <button
//             key={page}
//             onClick={() => handlePageChange(page)}
//             className={`px-2 text-[11px] rounded ${
//               page === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-300'
//             }`}
//           >
//             {page}
//           </button>
//         ))}

//         <button
//           onClick={() =>
//             handlePageChange(Math.min(currentPage + 1, totalPages))
//           }
//           disabled={currentPage === totalPages}
//           className="px-2 py-1 text-[12px] rounded bg-gray-200 disabled:opacity-50"
//         >
//           <FaArrowRight />
//         </button>
//       </div>

//       {/* Confirm Modals */}
//       {blockedAgent && confirmType === 'block' && (
//         <LockConfirmModal
//           isOpen={true}
//           onClose={() => setBlockedAgent(null)}
//           onConfirm={confirmBlockToggle}
//           name={blockedAgent.account}
//         />
//       )}
//       <UnblockConfirmModal
//         isOpen={!!(blockedAgent && confirmType === 'unblock')}
//         onClose={() => setBlockedAgent(null)}
//         onConfirm={confirmBlockToggle}
//         name={blockedAgent?.account}
//       />
//       <AgentSubListModal
//         isOpen={subAgentModalOpen}
//         onClose={() => setSubAgentModalOpen(false)}
//         agentList={subAgents}
//         onEdit={handleEditProfile}
//         onToggleBlock={agent =>
//           handleBlockToggle(agent, agent.blocked ? 'unblock' : 'block')
//         }
//       />

//       {/* <EditMasterAgentModal
//         isOpen={editModalOpen}
//         onClose={() => setEditModalOpen(false)}
//         agent={selectedAgent}
//         onUpdate={handleUpdateAgent}
//         onDelete={handleDeleteAgent}
//       /> */}
//       <AddAgentModal
//         isOpen={addModalOpen}
//         onClose={() => setAddModalOpen(false)}
//       />
//     </div>
//   );
// };

// export default MasterAgentList;

import React, { useState } from 'react';
import {
  FaUserEdit,
  FaPenAlt,
  FaPenNib,
  FaArrowLeft,
  FaArrowRight,
} from 'react-icons/fa';
import { LuCrosshair } from 'react-icons/lu';
import LockConfirmModal from '../MemberList/LockConfirmModal';
import UnblockConfirmModal from '../MemberList/UnblockConfirmModal';
import AddAgentModal from '../MasterAgentList/AddAgentModal';
import AgentSubListModal from '../MasterAgentList/AgentSubListModal';
import EditMasterAgentModal from '../MasterAgentList/EditMasterAgentModal';

const MasterAgentList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [blockedAgent, setBlockedAgent] = useState(null);
  const [confirmType, setConfirmType] = useState('');
  const [viewOnlySubList, setViewOnlySubList] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);

  const [subAgentModalOpen, setSubAgentModalOpen] = useState(false);
  const [selectedSubAgentList, setSelectedSubAgentList] = useState([]);

  const [selectedAgent, setSelectedAgent] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const agentsPerPage = 8;

  const [members, setMembers] = useState([
    {
      id: 1,
      account: '01773647834',
      name: 'Nancy Himel',
      password: '@#boomST25@#',
      balance: '$12,000.00',
      status: 'Active',
      blocked: false,
    },
    {
      id: 2,
      account: '01811223344',
      name: 'Hasan Mahmud',
      password: 'Test@123',
      balance: '$8,000.00',
      status: 'Active',
      blocked: false,
    },
  ]);

  const filteredMembers = members.filter(m => m.account.includes(searchTerm));

  const indexOfLastAgent = currentPage * agentsPerPage;
  const indexOfFirstAgent = indexOfLastAgent - agentsPerPage;
  const currentAgents = filteredMembers.slice(
    indexOfFirstAgent,
    indexOfLastAgent
  );
  const totalPages = Math.ceil(filteredMembers.length / agentsPerPage);

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  const handleBlockToggle = (agent, type) => {
    setBlockedAgent(agent);
    setConfirmType(type);
  };

  const confirmBlockToggle = () => {
    const updatedMembers = members.map(m =>
      m.id === blockedAgent.id
        ? {
            ...m,
            blocked: confirmType === 'block',
            status: confirmType === 'block' ? 'Blocked' : 'Active',
          }
        : m
    );

    // সাব এজেন্ট আপডেট (যদি দরকার হয়)
    const updatedSubAgentList = selectedSubAgentList.map(sa =>
      sa.id === blockedAgent.id
        ? {
            ...sa,
            blocked: confirmType === 'block',
            status: confirmType === 'block' ? 'Blocked' : 'Active',
          }
        : sa
    );

    setMembers(updatedMembers);
    setSelectedSubAgentList(updatedSubAgentList);

    setBlockedAgent(null);
  };

  const handleEditProfile = agent => {
    setSelectedAgent(agent);
    setEditModalOpen(true);
  };

  const handleUpdateAgent = updatedAgent => {
    setMembers(prevMembers =>
      prevMembers.map(agent =>
        agent.id === updatedAgent.id ? { ...agent, ...updatedAgent } : agent
      )
    );
    setEditModalOpen(false);
  };

  const handleDeleteAgent = agentToDelete => {
    setMembers(prevMembers =>
      prevMembers.filter(agent => agent.id !== agentToDelete.id)
    );
    setEditModalOpen(false);
  };

  const handleSeeAgentList = agent => {
    // ডামি সাব এজেন্ট ডাটা, বাস্তবে API থেকে নেবে
    const dummySubAgents = [
      {
        id: 101,
        account: '01711223344',
        password: 'subpass1',
        balance: '$3,000.00',
        status: 'Active',
        blocked: false,
      },
      {
        id: 102,
        account: '01799887766',
        password: 'subpass2',
        balance: '$2,000.00',
        status: 'Blocked',
        blocked: true,
      },
    ];
    setSelectedSubAgentList(dummySubAgents);
    setSubAgentModalOpen(true);
  };

  const handleSubAgentEdit = agent => {
    setSelectedAgent(agent);
    setEditModalOpen(true);
  };

  const handleSubAgentBlockToggle = (agent, type) => {
    setBlockedAgent(agent);
    setConfirmType(type);
  };

  return (
    <div className="bg-white md:p-6 rounded">
      {/* Search and Add Agent */}
      <div className="flex justify-between flex-wrap items-center mb-4 gap-3">
        <div className="relative flex-1 min-w-[150px] max-w-sm">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full border pr-8 pl-4 py-2 rounded font-dm text-[16px] bg-[#D9D9D9]"
          />
          <span className="absolute inset-y-0 right-3 flex items-center text-gray-700">
            <LuCrosshair size={17} />
          </span>
        </div>
        {!viewOnlySubList && (
          <button
            className="bg-black text-white px-5 py-2 rounded font-dm font-[600] text-[14px] sm:text-[16px] whitespace-nowrap"
            onClick={() => setAddModalOpen(true)}
          >
            Add Agent
          </button>
        )}
      </div>

      {/* Table */}
      <div className="overflow-x-auto pb-2">
        <div className="min-w-[850px]">
          <div className="grid grid-cols-[0.8fr_0.8fr_0.8fr_0.8fr_2fr] bg-[#C3C2C2] p-2 rounded text-center font-dm text-[10px] md:text-[14px] font-[500]">
            <div>ID</div>
            <div>Password</div>
            <div>Balance</div>
            <div>Status</div>
            <div className="px-10">Action</div>
          </div>

          <div className="space-y-2 mt-2">
            {currentAgents.map(m => (
              <div
                key={m.id}
                className="grid grid-cols-[0.8fr_0.8fr_0.8fr_0.9fr_2fr] gap-1 items-center bg-gray-100 rounded px-2 py-2 text-center font-dm text-[10px] md:text-[14px]"
              >
                <div>{m.account}</div>
                <div>{m.password}</div>
                <div className="flex items-center justify-center gap-1">
                  {m.balance}
                  <FaPenNib className="text-gray-600 text-[9px] md:text-sm cursor-pointer ml-1" />
                </div>
                <div>
                  <span
                    className={`px-2 py-0.5 rounded text-white text-[10px] md:text-xs ${
                      m.status === 'Active' ? 'bg-green-600' : 'bg-[#FDAC29]'
                    }`}
                  >
                    {m.status}
                  </span>
                </div>
                <div className="flex gap-2 justify-center items-center px-10 overflow-x-auto whitespace-nowrap scrollbar-hide">
                  <button
                    className="min-w-[90px] bg-blue-500 text-white px-2 py-1 rounded flex items-center justify-center"
                    onClick={() => handleEditProfile(m)}
                  >
                    <FaUserEdit className="mr-1" />
                    Profile Edit
                  </button>

                  <button
                    className={`min-w-[90px] ${
                      m.blocked ? 'bg-[#FDAC29]' : 'bg-blue-600'
                    } text-white px-2 py-1 rounded flex items-center justify-center`}
                    onClick={() =>
                      handleBlockToggle(m, m.blocked ? 'unblock' : 'block')
                    }
                  >
                    <FaPenAlt className="mr-1" />
                    {m.blocked ? 'Unblock' : 'Lock Up'}
                  </button>

                  <button
                    className="min-w-[90px] bg-blue-700 text-white px-2 py-1 rounded flex items-center justify-center"
                    onClick={() => handleSeeAgentList(m)}
                  >
                    See Agent List
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-end mt-10 gap-2 items-center">
        <button
          onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className="px-2 py-1 text-[12px] rounded bg-gray-200 disabled:opacity-50"
        >
          <FaArrowLeft />
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-2 text-[11px] rounded ${
              page === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-300'
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() =>
            handlePageChange(Math.min(currentPage + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-2 py-1 text-[12px] rounded bg-gray-200 disabled:opacity-50"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Modals */}
      {blockedAgent && confirmType === 'block' && (
        <LockConfirmModal
          isOpen={true}
          onClose={() => setBlockedAgent(null)}
          onConfirm={confirmBlockToggle}
          name={blockedAgent.account}
        />
      )}

      <UnblockConfirmModal
        isOpen={!!(blockedAgent && confirmType === 'unblock')}
        onClose={() => setBlockedAgent(null)}
        onConfirm={confirmBlockToggle}
        name={blockedAgent?.account}
      />

      <AgentSubListModal
        isOpen={subAgentModalOpen}
        onClose={() => setSubAgentModalOpen(false)}
        agentList={selectedSubAgentList}
        onEdit={handleSubAgentEdit}
        onBlockToggle={handleSubAgentBlockToggle}
      />

      <AddAgentModal
        isOpen={addModalOpen}
        onClose={() => setAddModalOpen(false)}
      />

      <EditMasterAgentModal
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        agent={selectedAgent}
        onUpdate={handleUpdateAgent}
        onDelete={handleDeleteAgent}
      />
    </div>
  );
};

export default MasterAgentList;
