import React, { useState ,useContext} from 'react'

import {Projectctx} from "../store/ProjectCtx";
const Task = () => {
  const [list,setList] = useState([])
    const [selectproject,setSelect] = useState('');
    const [task,setTask] = useState('')
    const [time,setTime] = useState()
    const [description,setDescription] = useState("");
    const [flag,setflag]=useState(false)
    const ctx = useContext(Projectctx);
    const  taskHandler =(e)=>{
           e.preventDefault()
           if(selectproject.length!==0 && task.length !==0 && description.length!==0){
            setList([...list,{selectproject,task,time,description}]);
            ctx.addtask({selectproject,task,time,description})
          
            setflag(false);
            setDescription('')
            setTask('')
            setTime('')
           }else{
            setflag(true)
           }
         
    }
 
   
  return (
    <>
        <form onSubmit={taskHandler}  className ="flex flex-col sm:w-[50%] mx-auto">
          <select name="projects" value={selectproject} onChange={(e)=>setSelect(e.target.value)}>
           <option value="">Select a project</option>
            {
              ctx.projectlist?.map((item,index)=>(
                <option value={item} key={index}>{item} </option>
              ))
            }
          </select >
            <input type="text" placeholder='Task name' value={task} onChange={(e)=>setTask(e.target.value)} className="mx-4 my-2 shadow-sm border px-4 py-2" />
            <input type="number" placeholder='add Time' value={time} step="0.01" onChange={(e)=>setTime(e.target.value)} className="mx-4 my-2 shadow-sm border px-4 py-2" />
            <input type="text"  placeholder='Add description' value={description} onChange={(e)=>setDescription(e.target.value)} className="mx-4 my-2 shadow-sm border px-4 py-2"/>
            <button type='submit' className='bg-[blue] px-4 py-2 text-white'>Add</button>
        </form>
        {
          flag && <h1>enter all details properly</h1>
        }
    </>
  )
}

export default Task