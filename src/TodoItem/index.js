import './TodoItem.css';

import { BiXCircle } from 'react-icons/bi';

function TodoItem(props) {
    return (
        <li className='li_todoItem'>
            <label className="custom-radio-checkbox">
                <span className={`custom-radio-checkbox__show custom-radio-checkbox__show--radio ${props.completed && "otra"}`}
                    onClick={props.onComplete}
                ></span>
                <span className='text_todoItem'>
                    <p className='text_bold'>{props.text}</p>
                    <p >{props.time}</p>
                </span>
                <span className='btn_close' onClick={props.onDelete}><BiXCircle /></span>
            </label>
        </li >
    );
}
export { TodoItem };