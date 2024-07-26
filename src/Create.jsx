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
    <div>
        <input type="text"  placeholder='Enter Task' onChange={(e) => setTask(e.target.value)} />
        <button type='button' onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create