import React, { useState, useEffect } from "react";
import taskData from "./data";

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [data, setData] = useState(taskData);
  const [newTask, setNewTask] = useState("");
  const [submittedTask, setSubmittedTask] = useState("");
  const [error, setError] = useState(null);
  
  const errorLimit = 8


  const clearTask = () => {
    setData([]);
  };

  const deleteTask = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  const refreshData = () => setData(taskData);

  useEffect(() => {
    if (submittedTask.length <= 3) {
      
    } else {
      setData((oldData) => {
        console.log(submittedTask);
        return [...oldData, { id: oldData.length + 1, task: submittedTask }];
      });
    }
  }, [submittedTask]);

  return (
    <Context.Provider
      value={{
        data,
        newTask,
        setNewTask,
        setSubmittedTask,
        clearTask,
        deleteTask,
        refreshData,
        error,
        errorLimit,
        setError,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
