import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-teal-500 to-blue-500">
      <div className="text-center text-white space-y-6">
        <h1 className="text-5xl font-bold">Welcome to Our Platform</h1>
        <p className="text-xl">Your journey to learning and success starts here!</p>
        <button 
          className="mt-4 px-6 py-2 text-lg bg-blue-600 text-white rounded-lg hover:bg-blue-800"
          onClick={() => navigate(`/login`)}
        >
          Login
        </button>
      </div>
    </div>
  );
}
