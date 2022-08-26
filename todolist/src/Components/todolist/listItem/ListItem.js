import './listeItem.css'
import { AiOutlineCheck} from 'react-icons/ai';


const ListItem = () => {
  return (
    <div className="todo" >
        <div className='todo_radio' >
            <AiOutlineCheck/>
        </div>

        <div className='todo_text ' >
            prueba de texto funcional
        </div>
    </div>
  )
}

export default ListItem