import TodoListItem from "./TodoListItem";

import classes from "./TodoList.module.css";

const TodoList = ({ todos }) => {
  console.log("rendered");
  return (
    <ul className={classes.list}>
      {todos.map((todo, index) => (
        <TodoListItem todo={todo} key={todo.id.toString() + index} />
      ))}
    </ul>
  );
};

export default TodoList;
