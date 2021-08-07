import TodoList from "./components/TodoList";
import * as styles from "./styles/App.module.css";

const App = () => {
  return (
    <div>
      <h1 className="title">The Todo-list by Alan Reid</h1>
      <div className={styles.appContainer}>

        <TodoList></TodoList>
      </div>
    </div>
  );
};

export default App;
