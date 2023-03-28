import React, { useState ,useContext} from 'react';
import {Projectctx} from "../store/ProjectCtx";

const Project = () => {
  const [project ,setProject] = useState('')
const ctx = useContext(Projectctx)
  const projectAddHandler =(e)=>{
           e.preventDefault();
          
         if(project.length!==0){
          ctx.addproject(project);
         }
           setProject("")
  }

  return (
    <div className='shadow my-10 py-10 grid place-items-center'>
        <form onSubmit={projectAddHandler} >
            <label htmlFor="project" > Project Name</label>
            <input type="text" id='project' value={project} onChange={(e)=>setProject(e.target.value)}  className="mx-4 shadow-sm border px-4 py-2" />
            <button type='submit'> Add</button>


        </form>
    </div>
  )
}

export default Project