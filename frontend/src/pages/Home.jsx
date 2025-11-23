import axios from 'axios'
import React from 'react'

const Home = () => {
  const logoutHandler = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/user/logout")
      console.log(response);
      localStorage.removeItem('token')

    } catch (error) {
      console.log(error);

    }
  }
  return (
    <div className='bg-black flex items-center justify-center w-full h-screen'>
      <div className='text-white text-center text-2xl border p-4 rounded-xl flex items-center justify-center flex-col'>
        
       <h1>logout</h1>
       
       <button onClick={logoutHandler} className='border mt-4  rounded-xl px-4 py-2 hover:rounded-full duration-150 hover:bg-blue-400 hover:transition-all '>logout</button></div>
      
    </div>
  )
}

export default Home
