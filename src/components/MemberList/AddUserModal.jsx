import React, { useState } from 'react';

const AddUserModal = ({ isOpen, onClose, onConfirm, onSuccess }) => {
  const [form, setForm] = useState({
    agent: '',
    number: '',
    password: '',
    amount: '',
  });

  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' })); // clear error on input
  };

  const validate = () => {
    let newErrors = {};
    if (!form.agent || form.agent.length < 5)
      newErrors.agent = 'Agent ID must be at least 5 digits';
    if (!form.number) newErrors.number = 'Mobile number is required';
    if (!form.password) newErrors.password = 'Password is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    onConfirm(form); // pass to parent
    setForm({ agent: '', number: '', password: '', amount: '' });
    setErrors({});
    onClose();

    onSuccess && onSuccess();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
        {/* Toast */}
        {toast && (
          <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-md text-sm">
            {toast}
          </div>
        )}

        {/* Agent Number */}
        <div className="mb-3 mt-2">
          <label className="block font-dm font-[400] md:text-[16px] text-[14px] mb-1">
            Enter Agent Number *
          </label>

          <input
            type="text"
            name="agent"
            value={form.agent}
            onChange={handleChange}
            className="w-full border p-2 rounded bg-[#D9D9D9]"
            placeholder="Number"
          />
          {errors.agent && (
            <p className="text-red-600 text-sm mt-1">{errors.agent}</p>
          )}
        </div>

        {/* Mobile Number */}
        <div className="mb-3">
          <label className="block font-dm font-[400] md:text-[16px] text-[14px] mb-1">
            Enter User Mobile Number *
          </label>
          <input
            type="text"
            name="number"
            value={form.number}
            onChange={handleChange}
            className="w-full border p-2 rounded bg-[#D9D9D9]"
            placeholder="017xxxxxxxx"
          />
          {errors.number && (
            <p className="text-red-600 text-sm mt-1">{errors.number}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-3">
          <label className="block font-dm font-[400] md:text-[16px] text-[14px] mb-1">
            Enter Password *
          </label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full border p-2 rounded bg-[#D9D9D9]"
            placeholder="********"
          />
          {errors.password && (
            <p className="text-red-600 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        {/* Optional Amount */}
        <div className="mb-4">
          <label className="block  font-dm font-[400] md:text-[16px] text-[14px] mb-1">
            Enter Amount (Optional)
          </label>
          <input
            type="text"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            className="w-full border p-2 rounded bg-[#D9D9D9]"
            placeholder="$0.00"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-black text-white py-2 rounded font-semibold"
        >
          Confirm
        </button>

        <button
          onClick={onClose}
          className="mt-3 w-full text-center text-gray-600 underline"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddUserModal;
