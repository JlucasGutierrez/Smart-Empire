"use client"
import { useState } from 'react';
import React from 'react';
import Modal from './modal';

export const Login = () =>{

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return(
    <div className="">
      <button
        className=" mr-3 group inline-block rounded bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
        onClick={openModal}
      >
        <span className="block rounded-sm bg-black px-8 py-2 text-sm font-medium text-white group-hover:bg-transparent">
          Login
        </span>
        
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        <p>Login</p>
      </Modal>
    </div>
  )
}