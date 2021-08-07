import React, { useState, useEffect } from "react";
import taskData from "./data";

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [data, setData] = useState(taskData);
  const [newTask, setNewTask] = useState("");
  const [submittedTask, setSubmittedTask] = useState("");

  // const submitTask = useCallback(() => {
  //   console.log(`executed`);
  //   setData((oldData) => {
  //     if (newTask === "") {
  //       return [...oldData];
  //     } else {
  //       console.log(`setData is being set`);
  //       let newTask = { id: oldData.length + 1, task: submittedTask };
  //       return [...oldData, newTask];
  //     }
  //   });
  // }, [submittedTask, newTask]);

  const clearTask = () => {
    setData([]);
  };

  const deleteTask = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  const refreshData = () => setData(taskData);

  useEffect(() => {
    if (submittedTask === "") {
      console.log("blank");
    } else {
      setData((oldData) => {
        console.log(submittedTask)
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
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
