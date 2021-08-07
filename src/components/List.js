import React, { useContext } from "react";
import { Context } from "../context";
import * as styles from "../styles/List.module.css";
import { Button } from '@material-ui/core';

const List = () => {
  const { data, deleteTask } = useContext(Context);
  return (
    <div>
      {data.map((item) => {
        return (
          <div className={styles.listData} key={item.id}>
            <h3>{item.task}</h3>
            <div>
              <Button onClick={() => deleteTask(item.id)} variant="contained" color="primary">
                Delete
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
