// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [credentials, setCredentials] = useState({ id: '', password: '' });
//   const [rememberMe, setRememberMe] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const savedId = localStorage.getItem('user_id');
//     if (savedId) {
//       setCredentials(prev => ({ ...prev, id: savedId }));
//       setRememberMe(true);
//     }
//   }, []);

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setCredentials(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     if (rememberMe) {
//       localStorage.setItem('user_id', credentials.id);
//     } else {
//       localStorage.removeItem('user_id');
//     }
//     navigate('/dashboard');
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-600 px-4 py-6 ">
//       <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg ">
//         {/* Logo/Image */}
//         <div className="flex justify-center mb-6 pt-28">
//           <img
//             src="/image/png-boom.png"
//             alt="boom"
//             className="w-fit h-fit rounded-full object-cover"
//           />
//         </div>

//         {/* Welcome Text */}
//         <p className="text-center text-gray-700 text-sm sm:text-base mb-4 font-dm">
//           Welcome Back! Please enter your details
//         </p>

//         {/* Login Form */}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* ID Field */}
//           <div>
//             <label className="block mb-1 font-dm font-[500] text-[16px]">
//               Enter ID
//             </label>
//             <input
//               type="text"
//               name="id"
//               value={credentials.id}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-2 border rounded bg-[#F1F1F1] font-dm font-[400] text-[16px]"
//               placeholder="Enter your ID"
//             />
//           </div>

//           {/* Password Field */}
//           <div>
//             <label className="block mb-1  font-dm font-[500] text-[16px]">
//               Password
//             </label>
//             <input
//               type="password"
//               name="password"
//               value={credentials.password}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-2 border rounded bg-[#F1F1F1] font-dm font-[400] text-[16px]"
//               placeholder="Enter your password"
//             />
//           </div>

//           {/* Remember Me & Forgot */}
//           <div className="flex items-center justify-between text-sm">
//             <label className="flex items-center">
//               <input
//                 type="checkbox"
//                 className="mr-2"
//                 checked={rememberMe}
//                 onChange={() => setRememberMe(!rememberMe)}
//               />
//               Remember me
//             </label>
//             <a
//               href="/forgot-password"
//               className="text-red-600 hover:underline font-dm font-[400] text-[14px]"
//             >
//               Forgot Password?
//             </a>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition font-dm font-[500] text-[16px] mb-28 mt-6"
//           >
//             Sign In
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const [credentials, setCredentials] = useState({ id: '', password: '' });
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedId = localStorage.getItem('user_id');
    if (savedId) {
      setCredentials(prev => ({ ...prev, id: savedId }));
      setRememberMe(true);
    }
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (rememberMe) {
      localStorage.setItem('user_id', credentials.id);
    } else {
      localStorage.removeItem('user_id');
    }

    if (credentials.id && credentials.password) {
      localStorage.setItem('loggedIn', JSON.stringify(true)); // true → string
      navigate('/dashboard');
      window.scrollTo(0, 0);
    } else {
      alert('Please enter both ID and password.');
    }
  };

  // const handleSubmit = e => {
  //   e.preventDefault();

  //   // শর্ত: ID ও Password ফাঁকা না হলে
  //   if (credentials.id.trim() === '' || credentials.password.trim() === '') {
  //     toast.warn('Please fill in all fields', {
  //       position: 'top-center',
  //       autoClose: 2000,
  //       theme: 'light',
  //     });
  //     return;
  //   }

  //   // Remember Me Check
  //   if (rememberMe) {
  //     localStorage.setItem('user_id', credentials.id);
  //   } else {
  //     localStorage.removeItem('user_id');
  //   }

  //   // ✅ Success Toast
  //   toast.success('Login successful!', {
  //     position: 'top-center',
  //     autoClose: 2000,
  //     theme: 'colored',
  //   });

  //   // 2 second পর redirect
  //   setTimeout(() => {
  //     navigate('/dashboard');
  //     window.scrollTo({
  //       top: 0,
  //       behavior: 'smooth',
  //     });
  //   }, 1000);
  // };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-600 px-4">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
        {/* Logo/Image */}
        <div className="flex justify-center mb-">
          <img
            src="/image/png-boom.png"
            alt="boom"
            className="  rounded-full object-cover"
          />
        </div>

        {/* Welcome Text */}
        <p className="text-center text-gray-700 text-base sm:text-lg mb-10 font-dm font-[400] text-[14px]">
          Welcome Back! Please enter your details
        </p>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* ID Field */}
          <div>
            <label className="block mb-1 font-dm font-semibold text-base">
              Enter ID
            </label>
            <input
              type="text"
              name="id"
              value={credentials.id}
              onChange={handleChange}
              placeholder="Enter your ID"
              className="w-full px-4 py-3 border rounded bg-[#F1F1F1] font-dm font-normal text-base focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block mb-1 font-dm font-semibold text-base">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-3 border rounded bg-[#F1F1F1] font-dm font-normal text-base focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Remember Me & Forgot */}
          <div className="flex items-center justify-between text-sm sm:text-base">
            <label className="flex items-center select-none">
              <input
                type="checkbox"
                className="mr-2"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              Remember me
            </label>

            {/* এখানে a tag এর জায়গায় Link দিয়ে replace করো */}
            <Link
              to="/forgot-password"
              className="text-red-600 hover:underline font-dm font-normal"
            >
              Forgot Password?
            </Link>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition font-dm font-semibold text-base"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
