function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
    case "REGISTER":
      return action.username;
    case "LOGOUT":
      return "";
    default:
      return state;
  }
}
function todosReducer(state, action) {
    let date = new Date();
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = {
        title: action.title,
        description: action.description,
        author: action.author,
        dateCreated: `${date.toDateString()} at ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
        complete: false,
        dateCompleted: "",
      };
      return [newTodo, ...state];
    case "TASK_MANIPULATED":
        date=new Date();
      const taskIndex = state.findIndex((todo) => todo.title === action.title);
      if (taskIndex === -1) {
        return state;
      }
      const updatedTask = {
        ...state[taskIndex],
        complete: !state[taskIndex].complete,
        dateCompleted: !state[taskIndex].complete
          ? `${date.toDateString()} at ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
          : "",
      };
      const newState = [...state];
      newState[taskIndex] = updatedTask;
      return newState;
    default:
      return state;
  }
}
export default function appReducer(state, action) {
  return {
    user: userReducer(state.user, action),
    todos: todosReducer(state.todos, action),
  };
}
