import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-900">
      <div className="mt-10 mb-10 w-full max-w-md p-8 space-y-6 bg-zinc-800 rounded-lg">
        <h2 className="text-3xl font-extrabold text-yellow-100 text-center">
          Log In
        </h2>
        <form className="mt-8 space-y-4">
          <div>
            <label htmlFor="email" className="text-yellow-100">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full mt-2 px-3 py-2 text-yellow-100 placeholder-zinc-500 bg-zinc-900 border border-zinc-700 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:bg-zinc-900"
              placeholder="Email address"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-yellow-100">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full mt-2 px-3 py-2 text-yellow-100 placeholder-zinc-500 bg-zinc-900 border border-zinc-700 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:bg-zinc-900"
              placeholder="Password"
            />
          </div>
          <div className="w-full flex items-center justify-center">
            <button
              type="submit"
              className="w-3/6 bg-blue-500 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-yellow-100 hover:bg-white hover:text-zinc-800 transition-all duration-300"
            >
              Log In
            </button>
          </div>
          <div className="text-center mt-4 text-yellow-100">
            OR
          </div>
          <div className="text-center mt-2 text-yellow-100">
            Don’t have an account?{' '}
            <a href="/signup" className="text-blue-400 hover:text-blue-300">
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
