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
    <div>
        <h2>To Do List</h2>
        <Create/>
        {
            todos.length === 0
            ?
            <div><h2>No Record.</h2></div>
            :
            todos.map(todo => (

                <div>
                    <div className='checkbox' onClick={() => handleEdit(todo._id)}> 
                    {todo.done ?
                    
                     console.log('success!')
                     :
                     <button >
                      Edit
                    </button>}
                    
                    
                    </div>
                    {todo.task} 
                <button onClick={() => handleDelete(todo._id)}>Delete</button>
                </div>

            ))
        }
    </div>
  )
}

export default Home
