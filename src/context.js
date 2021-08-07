import React, { useState, useEffect } from "react";
import taskData from "./data";
import { v4 as uuidv4 } from 'uuid';

const Context = React.createContext();

let localData = []
console.log(uuidv4())

if (localStorage.getItem("LocalTasks")) {
  console.log(`LocalStorage has found the keys: ${localStorage.getItem("LocalTasks")}`);
  localData = JSON.parse(localStorage.getItem("LocalTasks"));
  console.log(localData);
} else {
  console.log(`LocalTasks within localStorage not found. Creating it`);
  localStorage.setItem("LocalTasks", "[]");
  localData = JSON.parse(localStorage.getItem("localTasks"));
}

const ContextProvider = ({ children }) => {
  const [data, setData] = useState(localData || []);
  const [newTask, setNewTask] = useState("");
  const [submittedTask, setSubmittedTask] = useState("");
  const [alert, setAlert] = useState(null);
  const [msg, setMsg] = useState("hello");

  const errorLimit = 8;

  const alertTimeout = (message) => {
    setMsg(message);
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  };

  const clearTask = () => {
    setData([]);
    localStorage.setItem("LocalTasks", "[]")
  };

  const deleteTask = (id) => {
    const newData = data.filter((item) => item.id !== id);
    const prepareData = JSON.stringify(newData);
    localStorage.setItem("LocalTasks", prepareData)
    console.log(localStorage.getItem("LocalTasks"))
    setData(newData);
  };

  const refreshData = () => setData(taskData);

  useEffect(() => {
    if (submittedTask.length <= 3) {
    } else {
      setData((oldData) => {
        console.log(submittedTask);
        const newData = [...oldData, { id: uuidv4(), task: submittedTask }]
        const prepareData = JSON.stringify(newData)
        localStorage.setItem("LocalTasks", prepareData)
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
        alert,
        errorLimit,
        setAlert,
        setMsg,
        msg,
        alertTimeout,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
