import React from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
  return(
    <div className='w-full h-screen flex items-center justify-center tracking-wider bg'>

      <div className='w-11/12 sn:w-5/12 md:w-3/12 text-sn glass'>

      <div className='w-full text-center my-3'>
      <h2 className='text-2xl text-black font-medium'>Register</h2>

      </div>
      <form className='my-2'>

        <div className=' flex border-b-black border-b-2 mx-5 my-7 py-1'>
          <input 
          type='text'
           className='w-11/12 bg-transparent outline-none placeholder-black ' 
           placeholder='Enter your name'
           />
          <div className='w-2/12 flex items-center justify-center'>
          <i class="fa fa-user"></i>
          </div>
        </div>

        <div className=' flex border-b-black border-b-2 mx-5 my-7 py-1'>
          <input 
          type='email'
           className='w-11/12 bg-transparent outline-none placeholder-black ' 
           placeholder='Your email Address'
           />
          <div className='w-2/12 flex items-center justify-center'>
            <i className="fa-solid fa-envelope text-x1"></i>
          </div>
           
        </div>
        <div className=' flex border-b-black border-b-2 mx-5 my-7 py-1'>
          <input 
          type='password'
           className='w-11/12 bg-transparent outline-none placeholder-black ' 
           placeholder='Create a strong password'
           />
          <div className='w-2/12 flex items-center justify-center'>
            <i className="fa-solid fa-lock text-x1"></i>
          </div>
           
        </div>

        <div className='mx-3 my-5 py-2'>
          <button className='bg-blackw-full h-[35px] rounded-sn text-white justify-center items-center'>
            Register
            </button>
        </div>
        <Link to='/login' className='mx-5 my-5 py-2 items-center justify-center cursor pointer'>
          <p className='text-sn'>Already have a account? / Login</p>

        </Link>

      </form>
      
      </div>
  
    </div>
  )
}