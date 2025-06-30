import React, { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import {
  FaArrowLeft,
  FaArrowRight,
  FaUserEdit,
  FaPenAlt,
} from 'react-icons/fa';
import { LuCrosshair } from 'react-icons/lu';

const AgentSubListModal = ({
  isOpen,
  onClose,
  agentList = [],
  onEdit,
  onBlockToggle,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const agentsPerPage = 6;

  useEffect(() => {
    if (isOpen) {
      setSearchTerm('');
      setCurrentPage(1);
    }
  }, [isOpen]);

  const filteredAgents = agentList.filter(agent =>
    agent.account.includes(searchTerm)
  );

  const totalPages = Math.ceil(filteredAgents.length / agentsPerPage);
  const indexOfLastAgent = currentPage * agentsPerPage;
  const indexOfFirstAgent = indexOfLastAgent - agentsPerPage;
  const currentAgents = filteredAgents.slice(
    indexOfFirstAgent,
    indexOfLastAgent
  );

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-4xl rounded bg-white p-4 shadow-lg">
          {/* Search */}
          <div className="mb-8 mt-4 flex justify-end">
            <div className="relative max-w-sm ">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full border pr-8 pl-4 py-2 rounded bg-[#D9D9D9] font-dm text-[16px]"
              />
              <span className="absolute inset-y-0 right-3 flex items-center text-gray-700">
                <LuCrosshair size={17} />
              </span>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <div className="min-w-[700px]">
              <div className="grid grid-cols-[1fr_1fr_1fr_1fr_2fr] bg-[#C3C2C2] p-2 rounded text-center font-dm text-[11px] md:text-[14px] font-[500]">
                <div>Account</div>
                <div>Password</div>
                <div>Balance</div>
                <div>Status</div>
                <div>Action</div>
              </div>

              <div className="mt-2 mb-7 space-y-2">
                {currentAgents.map(agent => (
                  <div
                    key={agent.id}
                    className="grid grid-cols-[1fr_1fr_1fr_1fr_2fr] bg-gray-100 rounded p-2 text-center font-dm text-[10px] md:text-[14px] items-center"
                  >
                    <div>{agent.account}</div>
                    <div>{agent.password || 'N/A'}</div>
                    <div>{agent.balance || '$0.00'}</div>
                    <div>
                      <span
                        className={`px-2 py-0.5 rounded text-white ${
                          agent.status === 'Active'
                            ? 'bg-green-600'
                            : 'bg-yellow-500'
                        }`}
                      >
                        {agent.status || 'Active'}
                      </span>
                    </div>
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => onEdit(agent)}
                        className="bg-blue-500 text-white px-2 py-1 rounded flex items-center justify-center min-w-[80px]"
                      >
                        <FaUserEdit className="mr-1" />
                        Profile Edit
                      </button>
                      <button
                        onClick={() =>
                          onBlockToggle(
                            agent,
                            agent.blocked ? 'unblock' : 'block'
                          )
                        }
                        className={`text-white px-2 py-1 rounded flex items-center justify-center min-w-[80px] ${
                          agent.blocked ? 'bg-yellow-500' : 'bg-blue-600'
                        }`}
                      >
                        <FaPenAlt className="mr-1" />
                        {agent.blocked ? 'Unblock' : 'Lock Up'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-6 gap-2">
              <button
                onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="px-2 py-1 bg-gray-200 rounded disabled:opacity-50"
              >
                <FaArrowLeft />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                <button
                  key={p}
                  onClick={() => setCurrentPage(p)}
                  className={`px-3 py-1 rounded ${
                    p === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-300'
                  }`}
                >
                  {p}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-2 py-1 bg-gray-200 rounded disabled:opacity-50"
              >
                <FaArrowRight />
              </button>
            </div>
          )}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default AgentSubListModal;
