import React from 'react'
import './todo.css'
import { TbArrowBarDown } from 'react-icons/tb';
import ListItem from '../listItem/ListItem';


function Todo() {
  return (
    <div className='App'>
      <div className='App_Todo'>
        <form className='App_input_wrapper'>
          <input type="text" className='App_input' placeholder='Ingresa datos'/> 
          <div className='App_input_button' >
            <TbArrowBarDown size={24} />
          </div>   
        </form>
        <div className='App_todo_list' >
          <ListItem/>

        </div>
      </div>
    </div>
  )
}

export default Todo