import './listeItem.css'
import { AiOutlineCheck} from 'react-icons/ai';
import { ImBin} from 'react-icons/im';
import { BsPencilFill} from 'react-icons/bs';



const ListItem = ({text, editTodo, deleteTodo, ischecked, toggleChecked}) => {
  return (
    <div className="todo" >
        <div className={`${ischecked ? "todo_radio" : "todo_radio_unchecked" }`} onClick={toggleChecked} >
            { ischecked && <AiOutlineCheck/>}
        </div>

        <div className={` ${ischecked ? "todo_text_checked" : "todo_text"}`}>
            {text}
        </div>
        <div className='todo_edit' onClick={editTodo} >
           <BsPencilFill/> 
        </div>
        <div className='todo_delete' onClick={deleteTodo} >
           <ImBin/> 
        </div>
        
    </div>
  )
}

export default ListItem