'use client';
import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation'; 

const Register = () => {
  const [first_name, setFirstName] = useState<string>('');
  const [last_name, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState('');
  const router = useRouter();


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords don't match!");   
      return;
    }

    if (!first_name || !last_name || !email || !password) {
      setError('All fields are required!');
      return;
    }

    console.log('User registered:', { first_name, last_name, email, password });
    setError('');
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');

    // Prepare the user data to send
    const userData = { first_name, last_name, email, password };

    // Integrate User register API
    try {
      const res = await fetch('http://localhost:3000/auth/register', { // Replace with your Node.js API URL
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
          router.push('/login');  // Redirect to login page after successful registration
        }, 2000);
      } else {
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
    }
  };

  return (
    <>
        <div className="flex min-h-screen justify-center items-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold text-center mb-6 text-black">Register</h2>
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            <form onSubmit={handleSubmit}>
            {/* First Name */}
            <div className="mb-4">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                type="text"
                id="firstName"
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded-md  text-black"
                />
            </div>

            {/* Last Name */}
            <div className="mb-4">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                type="text"
                id="lastName"
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded-md  text-black"
                />
            </div>

            {/* Email */}
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded-md  text-black"
                />
            </div>

            {/* Password */}
            <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded-md  text-black"
                />
            </div>

            {/* Confirm Password */}
            <div className="mb-4">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded-md  text-black"
                />
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
                Register
            </button>
            </form>
            <p className="text-center mt-4 text-black">
            Already have an account?{' '}
            <a href="/login" className="text-blue-500">Login</a>
            </p>
        </div>
        </div>
        <ToastContainer />
      </>
    );

   
};

export default Register;
