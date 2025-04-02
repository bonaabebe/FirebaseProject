
import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase-config';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96 text-center">
        <h2 className="text-2xl font-bold mb-6">Welcome to the Home Page</h2>
        <button
          onClick={handleLogout}
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
