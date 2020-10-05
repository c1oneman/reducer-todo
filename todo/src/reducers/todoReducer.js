
export const initialState = [
    {
      item: "Learn about reducers",
      completed: false,
      id: 3892987589
    },
    {
      item: "Learn about javascript",
      completed: true,
      id: 124315343
    }
  ];
  
  export const reducer = (state, action) => {
    console.log("prevState: ", state);
    console.log("action: ", action);
    switch (action.type) {
      case "ADD_TODO":
        return [
          ...state,
          {
            item: action.item,
            completed: false,
            id: action.id,
          }
        ];
        case 'TOGGLE_TODO':
            return [...state.map(task => task.item === action.payload ? { ...task, completed: !task.completed } : task)];
        case 'CLEAR_COMPLETED':
            return [...state.filter(task => task.completed ? false : true)];
      default:
        return state;
    }
  };