import { createSlice } from "@reduxjs/toolkit";

export const userId = 10;

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
    addTodo: (state, action) => {
      state.todos = [action.payload, ...state.todos];
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id != action.payload.id);
    },
    patchTodo: (state, action) => {
      const temp = [...state.todos];
      const itemsToChange = temp.filter(
        (todo) => todo.id === action.payload.id
      );

      for (var item of itemsToChange) {
        const indexOfItem = temp.indexOf(item);
        temp[indexOfItem] = { ...temp[indexOfItem], ...action.payload.changes };
        console.log("hello");
      }

      state.todos = temp;
    },
  },
});

export const getTodosAction = () => {
  return async (dispatch) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}/todos`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const responseData = await response.json();
    dispatch(todoSlice.actions.setTodos(responseData));
  };
};

export const addTodoAction = (todo) => {
  return async (dispatch) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...todo, userId }),
    });

    const responseData = await response.json();
    dispatch(todoSlice.actions.addTodo(responseData));
  };
};

export const removeTodoAction = (id) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch(todoSlice.actions.removeTodo({ id }));
  };
};

export const patchTodoAction = (id, changedData) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(changedData),
      }
    );

    const responseData = await response.json();

    dispatch(todoSlice.actions.patchTodo({ id, changes: responseData }));
  };
};

export default todoSlice;
