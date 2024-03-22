import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import { Switch } from '@mui/material'
import '../components/lister.css'

function Lister(props) {

  const hendlechange = () => {
    fetch(`http://localhost:3001/data/` + props.id, {
      method: "PATCH",
      header: { "Content-Type": "application/json" },
      body: JSON.stringify({'completed': !props.completed}),
    }).then((res) => res.json())
      .then(data => console.log(data))
  }
  return (
    <div className='list'>
      <Switch focusVisibleClassName=".Mui-focusVisible" onClick={hendlechange}  />
        <div className='text'>{props.texr}</div>
        <div onClick={props.delBut}>
        <DeleteIcon/>
        </div>
    </div>
  )
}

export default Lister
