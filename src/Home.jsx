import React, { useEffect, useState } from 'react'
import Create from './Create'
import axios from 'axios'
 

function Home() {

    const [todos , setTodos] = useState([])
    useEffect(()=> {
        axios.get('http://localhost:3001/get')
        .then(result => setTodos(result.data))
        .catch(err => console.log(err))
    }, [])

    const handleEdit = (id) => {
        axios.put('http://localhost:3001/update/' +id)
        .then(result => {
            location.reload()
        })
        .catch(err => console.log(err))
    }

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/delete/' +id)
        .then(result => {
            location.reload()
        })
        .catch(err => console.log(err))
    }

  return (
    <div className='bg-black text-white absolute inset-0 flex flex-col justify-center items-center '>
        <div className='m-8 mb-10 '>
            <h1 className='text-blue-700 text-xl'>To Do List</h1>
        </div>
        
        <Create/>
       
        {
            todos.length === 0
            ?
            <div><h2 className='text-red-400 m-4'>No Records.</h2></div>
            
            : 
            todos.map(todo => (
                 
                <div className='bg-white rounded-lg w-80 m-1  flex items-center justify-between'>
                    
                    <div className='checkbox ' onClick={() => handleEdit(todo._id)}> 
                    {todo.done ?
                    
                     console.log('success!')
                     :
                     <button className=' text-green-600 ml-1'>
                      Edit
                    </button>}
                    </div>
                    
                    
                    <div className='text-black mx-4 break-words'>
                            {todo.task}
                    </div> 
                   
                    <button onClick={() => handleDelete(todo._id)} className=' text-red-600 bg-white rounded-lg p-1 '>Delete</button>
                   
              </div>
            
            ))
        }
        
    </div>
  )
}

export default Home
