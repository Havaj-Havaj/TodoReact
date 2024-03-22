import { Input } from '@mui/material'
import '../components/form.css'
function Form(props){
    return(
        <div className="form">
            <Input className='input' value={props.text} onChange={(e) => props.setText(e.target.value)} type="text" placeholder="Bведите текст"/>
            <button className='button' onClick={props.addBut}>добавить</button>
        </div>
    )
}

export default Form