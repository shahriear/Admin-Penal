import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [id, setId] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    // এখানে ID যাচাই করে পরবর্তী ধাপে যাবে
    alert(`Password reset link sent to ID: ${id}`);
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-xl font-bold mb-6 text-center">Forgot Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">
              Enter Your ID
            </label>
            <input
              type="text"
              name="id"
              value={id}
              onChange={e => setId(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded bg-[#F1F1F1]"
              placeholder="Enter your ID"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition font-dm font-[500] text-[16px]"
          >
            Submit
          </button>

          <div className="text-start mt-4">
            <button
              type="button"
              onClick={() => navigate('/login')}
              className="text-red-600 font-dm underline text-sm hover:text-blue-800"
            >
              Back to Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
