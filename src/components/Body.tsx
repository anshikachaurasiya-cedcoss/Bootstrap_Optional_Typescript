import React from 'react'
import MiddleBody from './MiddleBody'
import SideBar from './SideBar'

type bodyProps = {
  style:string
  setStyle:React.Dispatch<React.SetStateAction<string>>
  padding:string
  setPadding:React.Dispatch<React.SetStateAction<string>>
 }


const Body = (props:bodyProps) => {
  return (
    <div className='col-12 pTop d-flex flex-row'>
      <SideBar style={props.style} setStyle={props.setStyle}/>
      <MiddleBody padding={props.padding} setPadding={props.setPadding}/>
    </div>
  )
}

export default Body