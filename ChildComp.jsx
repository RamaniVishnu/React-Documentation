
function ChildComp({sendData,updateData}){
 
 const updateDataHandler=()=>{
  updateData('Msg from Child');
 }
 return (
  <div style={{border: '3px solid red'}}>
  <h2>Child Comp</h2>
  <p> Value obtained from parent component: {sendData} </p>
  <button onClick={updateDataHandler} > Change value </button>
  </div>
 )

}

export default ChildComp;
