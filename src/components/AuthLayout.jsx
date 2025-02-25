import React from 'react';
import logo from '/assets/images/logo2.png';

const AuthLayout = ({ children, title }) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 bg-blue-500 p-8 flex flex-col justify-center items-center text-white">
        <div className="max-w-md">
          <div className="flex items-center gap-4 mb-4">
            <img
              src={logo}
              alt="Logo"
              className="w-16 h-16 object-contain"
            />
            <h1 className="text-4xl text-blue-800 font-bold">PetHost</h1>
          </div>
          <p className="text-blue-800 text-xl">
            Seu pet merece o melhor descanso, onde ele também se sente em casa!
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">{title}</h2>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
