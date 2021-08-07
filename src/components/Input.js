import React, { useContext } from "react";
import { Context } from "../context";

import * as styles from "../styles/Input.module.css";
import { TextField } from "@material-ui/core";

const Input = () => {
  const { alertTimeout, newTask, setNewTask, setSubmittedTask,errorLimit } = useContext(Context);
  return (
    <div className={styles.container}>
      <h2>To do:</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (newTask.length <= errorLimit) {
            alertTimeout("Something went mega wrong")
          } else {
            setSubmittedTask(newTask)
            setNewTask("")
            alertTimeout("Task added")
          }
        }}
      >
        <TextField
          className={styles.input}
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          value={newTask}
          onChange={(e) => {
            setNewTask(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default Input;
