import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";

export const getTodosAsync = createAsyncThunk(
  "todos/getTodosAsync/",
  async () => {
    const response = await fetch("http://localhost:7000/todos");
    return await response.json();
  }
);

export const addTodoAsync = createAsyncThunk(
  "todos/addTodoAsync/",
  async (title) => {
    const response = await fetch("http://localhost:7000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: nanoid(),
        title,
        completed: false,
      }),
    });
    return await response.json();
  }
);

export const toggleTodoAsync = createAsyncThunk(
  "todos/toggleTodoAsync/",
  async (id) => {
    const response = await fetch(`http://localhost:7000/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: true,
      }),
    });
    return await response.json();
  }
);

export const deleteTodoAsync = createAsyncThunk(
  "todos/deleteTodoAsync/",
  async (id) => {
    const response = await fetch(`http://localhost:7000/todos/${id}`, {
      method: "DELETE",
    });
    return await response.json();
  }
);

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    activeFilter: "all",
    isLoading: false,
    error: null,
  },
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: ({ title }) => ({
        payload: {
          id: nanoid(),
          completed: false,
          title,
        },
      }),
    },
    toggleTodo: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find((item) => item.id === id);
      item.completed = !item.completed;
    },
    removeTodo: (state, action) => {
      const { id } = action.payload;
      const filtered = state.items.filter((item) => item.id !== id);
      state.items = filtered;
    },
    changeActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
    clearCompleted: (state) => {
      const filtered = state.items.filter((item) => item.completed === false);
      state.items = filtered;
    },
  },
  extraReducers: {
    [getTodosAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getTodosAsync.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    [getTodosAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
    [addTodoAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [addTodoAsync.fulfilled]: (state, action) => {
      state.items.push(action.payload);
      state.isLoading = false;
    },
    [addTodoAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
    [toggleTodoAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [toggleTodoAsync.fulfilled]: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find((item) => item.id === id);
      item.completed = !item.completed;
      state.isLoading = false;
    },
    [toggleTodoAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
    [deleteTodoAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [deleteTodoAsync.fulfilled]: (state, action) => {
      const { id } = action.payload;
      const filtered = state.items.filter((item) => item.id !== id);
      state.items = filtered;
      state.isLoading = false;
    },
    [deleteTodoAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export const {
  addTodo,
  toggleTodo,
  removeTodo,
  changeActiveFilter,
  clearCompleted,
} = todosSlice.actions;
export default todosSlice.reducer;
