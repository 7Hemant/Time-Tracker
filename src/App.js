import { useContext } from "react";
import Project from "./components/Project";
import Task from "./components/Task";
import { Projectctx } from "./store/ProjectCtx";

function App() {
  const ctx = useContext(Projectctx);

  return (
    <div className="App">
    <h1 className="text-center font-bold text-[40px]">Time tracker</h1>
    <Project/>   
     {
     ctx.projectlist.length !==0  ? <Task/>:<h1 className="text-center">Create your porject and add task</h1> 
      }
   {
     ctx.tasklist.map((item,index)=>(
       <div key={index} className="w-[80%] sm:w-[70%] shadow-sm mx-auto my-4 px-8" >
        <h1>project name={item.selectproject}</h1>
        <h1> task={item.task}</h1>
        <h2>time {item.time}</h2>
        <h3> description {item.description}</h3>
      </div>
  ))
   }

    </div>
  );
}

export default App;
