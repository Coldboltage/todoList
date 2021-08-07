import React, { useContext } from "react";
import { Context } from "../context";

import * as styles from "../styles/Input.module.css";
import { TextField } from "@material-ui/core";

const Input = () => {
  const { newTask, setNewTask, submitTask, setSubmittedTask } = useContext(Context);
  return (
    <div className={styles.container}>
      <h2>To do:</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(newTask);
          setSubmittedTask(newTask)
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
