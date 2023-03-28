import { createContext ,useState } from "react";

export const Projectctx = createContext()

const PorjectContextPorvider =({children})=>{
    const [projectlist,setPorjectList] =useState([])
  const [tasklist,setTaskList] =useState([])


  const addproject =(value)=>{
    setPorjectList([...projectlist,value])
  }
  
  const addtask = (value )=>{
    setTaskList([...tasklist,value])
  }

  const value = {
    projectlist,
    addproject,
    tasklist,
    addtask
  }
  console.log( "echeck",tasklist)
  return <Projectctx.Provider value={value} >{children} </Projectctx.Provider>
}

export default PorjectContextPorvider;