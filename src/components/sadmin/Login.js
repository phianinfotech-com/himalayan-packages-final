// Login.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    // Check if email and password are not empty
    if (!email || !password) {
      setError('Email and password are required');
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post('https://himalayanpackages.com/himalayan/api-login.php', {
        email,
        password,
      }, { withCredentials: true });

      const token = response.data.token;

      if (token) {
        console.log('Token:', token);
        setError(''); // Clear any previous errors
      } else {
        setError('Login failed. Token not received.');
      }
    } catch (error) {
      console.error('Login failed:', error.message);
      setError('Login failed. Please try again.'); // Provide a generic error message
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          
          <button
            type="submit"
            className="w-full bg-primary text-white rounded px-4 py-2 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Log in'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;