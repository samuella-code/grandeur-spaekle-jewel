import React from 'react'
import { Link } from 'react-router-dom';
import AuthLayout from '../Components/layouts/AuthLayout';



function Logins() {

  return (
    <AuthLayout>
    <div className='w-full h-screen flex items-center justify-center tracking-wider bg'>

    <div className='w-11/12 sn:w-5/12 md:w-3/12 text-sn glass'>

    <div className='w-full text-center my-3'>
      <h2 className='text-5xl text-black font-medium'>Login</h2>
    </div>
    <form className='my-2'>

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

      <div className='mx-5 flex items-center justify-end cursor-pointer tracking-wider text-xs'>
        <p>Forget Password</p>
      </div>

      <div className='mx-5 my-7 py-2'>
        <button className='bg-blackw-full h-[35px] rounded-sn text-white'>
          Login
          </button>
      </div>
      <Link to='/register' className='mx-5 my-5 py-2 items-center justify-center cursor pointer'>
        <p className='text-sn'>Don't have a account? / Register</p>

      </Link>

    </form>
    
    </div>

  </div>
  </AuthLayout>
  )
}
export default Logins;