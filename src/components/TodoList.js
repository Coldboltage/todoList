import List from "./List"
import * as styles from "../styles/TodoList.module.css"
import Input from "./Input"
import Clear from "./Clear"

const TodoList = () => {
    return (
        <div className={styles.container}>
            <Input/>
            <List/>
            <Clear/>
        </div>
    )
}

export default TodoList
