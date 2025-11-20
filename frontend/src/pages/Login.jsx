import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
   <div className='w-full h-screen bg-black text-white flex justify-center items-center'>
        <div className='rounded-xl border shadow-lg p-4 shadow-white '>
        <h1 className=' text-3xl mb-4'>Login</h1>
       
        
        <div className='  text-center'> 
                <label>Email:</label>
                <input  type="text" placeholder='Enter the email' className=' p-2 outline-none'/>
        </div>
        <div className='  text-center'> 
                <label>Password:</label>
                <input  type="password" placeholder='Enter the Password' className=' p-2 outline-none'/>
        </div>
        <div className='flex items-center justify-center flex-col '>
            <button className='border mt-4  rounded-xl px-4 py-2 hover:rounded-full duration-150 hover:bg-blue-400 hover:transition-all  '>Login</button>
            <Link to='/Signup' className='hover:text-red-600 transition-all duration-200 underline'>Don't have an account?</Link>
        </div>
         </div>
    </div>
  )
}

export default Login
