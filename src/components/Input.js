import React, { useContext } from "react";
import { Context } from "../context";

import * as styles from "../styles/Input.module.css";
import { TextField } from "@material-ui/core";

const Input = () => {
  const { newTask, setNewTask, setSubmittedTask, setError,errorLimit } = useContext(Context);
  return (
    <div className={styles.container}>
      <h2>To do:</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(`setSubmittedTask executed`);
          console.log(newTask)
          if (newTask.length <= errorLimit) {
            setError(true)
            setTimeout(() => {
              setError(false)
            }, 2000);

          } else {
            setSubmittedTask(newTask)
            setNewTask("")
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
