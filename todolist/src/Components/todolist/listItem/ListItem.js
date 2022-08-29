import './listeItem.css'
import { AiOutlineCheck} from 'react-icons/ai';
import { ImBin} from 'react-icons/im';
import { BsPencilFill} from 'react-icons/bs';



const ListItem = ({text, editTodo, deleteTodo, ischecked, toggleChecked}) => {
  return (
    <div className="todo" >
        <h3>TODOAPP USING REACT HOOKS AND LOCALSTORAGE</h3>
      <div className="form-and-todo-box">
        <Form/>
      </div>
        
    </div>
  )
}

export default ListItem