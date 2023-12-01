import React, { useReducer, useState } from 'react'
import Todostyles from './TodolistuseReducer.module.css'

const taskReducer = (state, action) => {

  switch (action.type) {
    
    //^ Add Task
    case 'ADD_TASK':
      if (action.task !== "") {
        return {
          ...state,
          tasks: [...state.tasks, action.task],
          add: true,
          efm: "",
          task: "",
        };
      } else {
        return {
          ...state,
          efm: "Field is Empty",
        };
      }

    //^ Delete Task
    case 'DELETE_TASK':
      const remainingTasks = state.tasks.filter((task, index) => index !== action.index);
      return {
        ...state,
        tasks: remainingTasks,
        del: true,
      };

      //^ Set Task
    case 'SET_TASK':
      return {
        ...state,
        task: action.task,
      };
    default:
      return state;
  }
};

function Todolist() {
  const initialState = {
    task: "",
    tasks: [],
    add: false,
    del: false,
    efm: "",
  };

  const [state, dispatch] = useReducer(taskReducer, initialState);

  const getInputData = ({ target: { value } }) => {
    dispatch({ type: 'SET_TASK', task: value });
  };

  const addTask = () => {
    dispatch({ type: 'ADD_TASK', task: state.task });
    setTimeout(() => {
      dispatch({ type: 'RESET_ADD' });
    }, 2500);
  };

  const deleteTask = (index) => {
    dispatch({ type: 'DELETE_TASK', index });
    setTimeout(() => {
      dispatch({ type: 'RESET_DEL' });
    }, 2500);
  };

  return (
    <>
      <nav>
        <h1>TODO LIST APP</h1>
      </nav>

      <section className={Todostyles.todoSection}>
        <div className={Todostyles.inputField}>
        <input type="text" placeholder={state.efm || 'Add your Task'} onChange={getInputData} value={state.task} />
          <button type='submit' onClick={addTask}>Add Task</button>
        </div>
        <div>
          {state.tasks.map((t, i) => {
            return (
              <div className={Todostyles.tasks} key={i}>
                <p>{t}</p>
                <button onClick={() => deleteTask(i)}><i className="fa-solid fa-trash-can"></i></button>
              </div>
            );
          })}
        </div>
        {state.add && <p className={Todostyles.add}>Task Added Successfully</p>}
        {state.del && <p className={Todostyles.del}>Task Deleted Successfully</p>}
      </section>
      <ul className={Todostyles.uli}>
      </ul>
    </>
  );
}

export default Todolist;
