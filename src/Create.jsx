import axios from 'axios'
import React, { useState } from 'react'

function Create() {
    const[task, setTask]= useState()
    const handleAdd = () =>{
        axios.post('http://localhost:3001/add', {task:task})
        .then(result =>  {
            location.reload()
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='mb-5'>
        <input type="text"  placeholder='Enter Task' onChange={(e) => setTask(e.target.value) } className='w-80 h-10 rounded-xl p-2 text-black'/>
        <button type='button' onClick={handleAdd} className='bg-blue-600 ml-2 p-2 rounded-lg'>Add</button>
    </div>
  )
}

export default Create