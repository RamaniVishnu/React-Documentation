import {useState} from 'react';
import ChildComp from './ChildComp';
function ParentComp(){
  const [data,setData]= useState('Msg from parent');

  const updateDataVal=(val)=>{
    setData(val)
  }
  return (
    <div style={{ border:'3px solid black'}}>
    <h2>Parent Comp</h2>
    <p>value is : {data}</p>
    <ChildComp sendData={data} updateData={updateDataVal}/>
    </div>
  )

}

export default ParentComp;
