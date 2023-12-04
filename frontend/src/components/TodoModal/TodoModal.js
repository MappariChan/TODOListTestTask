import Backdrop from "../../UI/Backdrop";

import classes from "../AddTodoModal/AddTodoModal.module.css";

const TodoModal = ({ todo, onClose }) => {
  return (
    <>
      <div className={classes.modal}>
        <span>{todo.title}</span>
      </div>
      <Backdrop onClose={onClose} />
    </>
  );
};

export default TodoModal;
