import React, { useState, useEffect } from "react";
import taskData from "./data";

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [data, setData] = useState(taskData);
  const [newTask, setNewTask] = useState("");
  const [submittedTask, setSubmittedTask] = useState([]);

  const submitTask = () => {
    console.log(`executed`);
    setData((oldData) => {
      if (newTask === "") {
        return [...oldData];
      } else {
        let newTask = { id: oldData.length + 1, task: submittedTask };
        return [...oldData, newTask];
      }
    });
    setNewTask("");
  };

  const clearTask = () => {
    setData([])
  }

  const deleteTask = (id) => {
      const newData = data.filter((item)=> item.id !== id)
      setData(newData)
  }

  const refreshData = () => setData(taskData)

  useEffect(() => {
    submitTask();
  }, [submittedTask]);

  return (
    <Context.Provider
      value={{ data, newTask, setNewTask, submitTask, setSubmittedTask,clearTask, deleteTask, refreshData }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
