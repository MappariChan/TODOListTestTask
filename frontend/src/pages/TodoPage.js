import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTodosAction } from "../store/slices/todoSlice";

import TodoList from "../components/TodoList/TodoList";

import classes from "./TodoPage.module.css";
import PageSwitcher from "./PageSwitcher";

const pageSize = 7;

const TodoPage = () => {
  const [currentPage, setPage] = useState(1);
  const todos = useSelector((store) => store.todo.todos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodosAction());
  }, []);

  const paginate = (array) => {
    return array.slice(pageSize * (currentPage - 1), pageSize * currentPage);
  };

  const doneAmount = todos.filter((todo) => todo.completed).length;

  return (
    <>
      <header className={classes.header}>
        <h1>TODO List</h1>
        <span>
          Your progress <span>{doneAmount}</span>/<span>{todos.length}</span>
        </span>
        <div className={classes["progress-bar"]}>
          <div
            className={classes["progress"]}
            style={{ width: (doneAmount / todos.length) * 100 + "%" }}
          ></div>
        </div>
      </header>
      <TodoList todos={paginate(todos)} />
      <PageSwitcher
        currentPage={currentPage}
        setPage={setPage}
        pagesAmount={Math.ceil(todos.length / pageSize)}
      />
    </>
  );
};

export default TodoPage;
