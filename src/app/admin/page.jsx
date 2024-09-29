"use client";

import { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Please fill in all fields');
      return;
    }

    setError('');
    setSubmittedData({ username, password });

    setUsername('');
    setPassword('');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-600 p-4 text-black">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">

        <div className="mb-4">
          
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>

          <input
            type="text"
            id="username"
            placeholder="admin"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="text"
            id="password"
            placeholder="admin"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-200"
        >
          Submit
        </button>
      </form>

      {submittedData && (
        <div className='w-fit bg-white p-4 mt-10 rounded-lg '>
            ban gaye hacker man ?
        </div>
      )}
    </div>
  );
};

export default LoginPage;
