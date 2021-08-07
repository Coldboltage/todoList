import List from "./List";
import * as styles from "../styles/TodoList.module.css";
import Input from "./Input";
import Clear from "./Clear";
import Error from "../components/Error";

const TodoList = () => {
  return (
    <div className={styles.outterContainer}>
      <Error></Error>
      <div className={styles.container}>
        <Input />
        <List />
        <Clear />
      </div>
    </div>
  );
};

export default TodoList;
