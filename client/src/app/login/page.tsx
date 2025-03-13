'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { ToastContainer, toast } from 'react-toastify'; 

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (email && password) {
      setLoading(true);
      setError('');
    } else {
      setError('Please fill in all fields');
    }

    // Prepare the user data to send
    const userData = { email, password };

    // Integrate User login API
    try {
      const res = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await res.json();
      
      if (res.status === 200) {
        setSuccess('Registration successful!');
        setTimeout(() => {
          localStorage.setItem('authToken', data.data);
          router.push('/user/userList');  // Redirect to login page after successful registration
        }, 2000);
      } else {
        if(res.status === 404){
          toast.error(data.message)
        }

        if(res.status === 400){
            toast.error(data.message)
        }
        if(res.status === 500){
            toast.error(data.message)
        }
        setError(data.message || 'Registration failed.');
      }
    } catch (error) {
      setError('An error occurred while registering. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6 text-black">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* {error && <p className="text-red-500 text-center">{error}</p>} */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md  text-black"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md  text-black"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
            Login
          </button>
        </form>
        <p className="text-center mt-4 text-black">
          Don't have an account?{' '}
          <a href="/register" className="text-blue-500">Register</a>
        </p>
      </div>
    </div>
     <ToastContainer />

     </>
  );
};

export default LoginPage;
