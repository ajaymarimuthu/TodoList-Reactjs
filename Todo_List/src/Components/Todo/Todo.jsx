import React from 'react'
import { useState } from 'react'
import TodoList from '../TodoList/TodoList';

function Todo() {

    const [todoList, setTodoList] = useState([]);

    const [newTask, setNewTask] = useState("");
     
    const handleChange = (e) => {
        setNewTask(e.target.value);

    }

    const addTask = (e) => {

        const task={
            id:  todoList.length===0 ? 1: todoList[todoList.length-1].id+1,
            taskName:newTask,
            isComplete:false
        }

        if(!newTask){
            alert('Enter the Task')
        }
        else{
            setTodoList([...todoList, task]);
      }
      
    }

    const deleteTask = (id) =>{

        // console.log("delete");


        //Delete Method 1 

    //    const newTodoList= todoList.filter((tname)=>{
    //     if(tname===itemName){
    //         return false;
            
    //     console.log("delete");
    //     }
    //     else{
    //         return true;
    //     }
    //    })

    //    setTodoList(newTodoList);


    // ---------------

    //Delete Method 2

    // const newTodoList=todoList.filter((item)=>{ return item!==itemName })
    // setTodoList(newTodoList);


    // ---------------

    //Delete Method 3

    setTodoList(todoList.filter((item)=> item.id!==id));

    }


    const completedTask = (id) =>{

       setTodoList(
        todoList.map((item)=>{
            // console.log("in completd task");
            if(item.id===id){
                
            // console.log("in if");
                return {...item, isComplete:true}
            }
            else{
                
            console.log("in else");
                return item;
            }
        })
       )

    }

    return (
        <div className='todo'>
            <div className="addTask">
                <input type="text" onChange={handleChange} />
                <button onClick={addTask}>Add Text</button>

            </div>
            {todoList.map((item) => {
                return <TodoList  item={item}
                key={item.id}
                 deleteTask={deleteTask}
                 
                  completedTask={completedTask}
                  isComplete={item.isComplete}
                 />
            })}

        </div>
    )
}

export default Todo