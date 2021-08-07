import React, { useContext } from "react";
import { Context } from "../context";

import List from "./List";
import * as styles from "../styles/TodoList.module.css";
import Input from "./Input";
import Clear from "./Clear";
import Alert from "./Alert";

const TodoList = () => {
  const {msg} = useContext(Context)

  return (
    <div className={styles.outterContainer}>
      <Alert msg={msg}/>
      <div className={styles.container}>
        <Input />
        <List />
        <Clear />
      </div>
    </div>
  );
};

export default TodoList;
