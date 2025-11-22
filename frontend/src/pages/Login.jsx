import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

        const navigate = useNavigate;

        const[email, setEmail] = useState("");
        const[password, setPassword] = useState("");

        const submitHandler = async (e) =>{
                e.preventDefault();
                try {
                    const response = await axios.post("http://localhost:8000/api/user/login", {email,password});
                    console.log(response.data);
                    if(!response.data.success){
                        return window.alert("login failed")
                    }
                    setEmail("")
                    setPassword("")

                    navigate("/home")
                    
                } catch (error) {
                        console.log(error);
                        
                }
        }
  return (
   <div className='w-full h-screen bg-black text-white flex justify-center items-center'>
        <div className='rounded-xl border shadow-lg p-4 shadow-white '>
        <h1 className=' text-3xl mb-4 flex justify-center items-center'>Login</h1>
       
        
        <div className='  border  text-center m-2 p-2'> 
                <label>Email:</label>
                <input onChange={(e)=>setEmail(e.target.value)} value={email} type="text" placeholder='Enter the email' className=' p-2 outline-none'/>
        </div>
        <div className='  border  text-center m-2 p-2'> 
                <label>Password:</label>
                <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder='Enter the Password' className=' p-2 outline-none'/>
        </div>
        <div className='flex items-center justify-center flex-col '>
            <button onClick={submitHandler} className='border mt-4  rounded-xl px-4 py-2 hover:rounded-full duration-150 hover:bg-blue-400 hover:transition-all  '>Login</button>
            <Link to='/Signup' className='hover:text-red-600 transition-all duration-200 underline'>Don't have an account?</Link>
        </div>
         </div>
    </div>
  )
}

export default Login
