import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';


const Signup = () => {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()



    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/api/user/register", { name, email, password })
            console.log(response.data);
            if (!response.data.success) {
                return window.alert("Registration Failed");

            }
            setEmail("");
            setName("");
            setPassword("");

            localStorage.setItem("token", response.data.token);


            navigate("/home");

        } catch (error) {
            console.log(error);

        }

    }
    return (

        <div className='w-full h-screen bg-black text-white flex justify-center items-center'>
            <div className='rounded-xl border shadow-lg p-4 shadow-white '>
                <h1 className=' text-3xl mb-4 flex items-center justify-center'>Signup </h1>

                <div className='border text-center m-2 p-2'>
                    <label>Name:</label>
                    <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder='Enter the fullname' className=' p-2 outline-none' />
                </div>
                <div className=' border text-center m-2 p-2'>
                    <label>Email:</label>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" placeholder='Enter the email' className=' p-2 outline-none' />
                </div>
                <div className='border  text-center m-2 p-2'>
                    <label>Password:</label>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder='Enter the Password' className=' p-2 outline-none' />
                </div>
                <div className='flex items-center justify-center flex-col '>
                    <button onClick={submitHandler} className='border mt-4  rounded-xl px-4 py-2 hover:rounded-full duration-150 hover:bg-blue-400 hover:transition-all  '>SignUp</button>
                    <Link to='/' className='hover:text-red-600 transition-all duration-200 underline'>Already have an account?</Link>
                </div>
            </div>
        </div>
    )
}

export default Signup
