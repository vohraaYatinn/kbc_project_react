import React from 'react'

const DetailsInput = ({setUserName, setNameSubmit}) => {
  return (
    <>
    <input type="text" name="name" id="name" onChange={(e)=>{
setUserName(e.target.value)
    }}/>
    <button onClick={()=>{setNameSubmit(true)}}>submit</button>
    </>
  )
}

export default DetailsInput