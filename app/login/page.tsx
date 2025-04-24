'use client'; // If using Next.js App Router

import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaLock, FaGoogle } from 'react-icons/fa'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-50 to-blue-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl"
      >
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-800">
            Login 
          </h2>
        </div>
        <form className="mt-8 space-y-6">
          <div className="relative">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email address
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
              <input
                id="email"
                name="email"
                type="email"
                required
                className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-3 text-gray-400" />
              <input
                id="password"
                name="password"
                type="password"
                required
                className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-gray-700">Remember me</span>
            </label>
            <a href="#" className="text-blue-600 hover:text-blue-500 font-medium">
              Forgot password?
            </a>
          </div>

          <div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-md text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign in
            </motion.button>
          </div>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          — Or continue with —
        </div>

        <div className="mt-4 grid grid-cols-1 gap-3">
          <button
            type="button"
            className="w-full inline-flex justify-center items-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-600 hover:bg-gray-50"
          >
            <FaGoogle className="w-5 h-5 mr-2" />
            Sign in with Google
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don&apos;t have an account?{' '}
          <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
            Create one
          </a>
        </p>
      </motion.div>
    </div>
  );
}
