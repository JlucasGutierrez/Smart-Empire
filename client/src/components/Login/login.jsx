"use client"
import { useState } from 'react';
import React from 'react';
import Modal from './modal';
import { Button, Card, CardBody, CardFooter, CardHeader, Checkbox, Input, Typography } from '@material-tailwind/react';

export const Login = () =>{

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return(
    <div className="">
      <button
        className=" mr-3 group inline-block rounded bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
        onClick={openModal}>
        <span className="block rounded-sm bg-black px-8 py-2 text-sm font-medium text-white group-hover:bg-transparent">
          Login
        </span>
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className=' grid place-items-center'>
          <Card className='w-96'>
          <CardHeader className='mt-3  h-28 grid place-items-center' variant='gradient' color='gray'>
            <Typography variant='h3' color='white'>
              Sign IN
            </Typography>
          </CardHeader>
          <CardBody className='flex flex-col gap-4'>
            <Input label='Email' size='lg'/>
            <Input label='Password' size='lg'/>
            <div className='-ml-2.5'>
              <Checkbox label="Remeber Me"/>
            </div>
          </CardBody>
          <CardFooter className='pt-0'>
            <Button variant='gradient' fullWidth>
              Sing In
            </Button>
            <Typography className='mt-6 flex justify-center'>
              No tienes cuenta?
              <Typography className='ml-1 font-bold' variant='small'color='blue-gray' href='{Register}' as="a">
                Sign up
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
        </div>
        
      </Modal>
    </div>
  )
}