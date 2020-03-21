export const ADD_TODO = {
  type: "ADD_TODO",
  todo: {
    id: 0,
    name: 'Learn redux',
    complete: false
  }
};

// action creator sample.
export const addTodoAction = (todo) => ({
  type: 'ADD_TODO',
  todo,
});

addTodoAction({
  id: 0,
  name: 'Learn redux',
  complete: false
});

export const REMOVE_TODO = {
  type: "REMOVE_TODO",
  id: 0
};


export const TOGGLE_TODO = {
  type: 'TOGGLE_TODO',
  id: 0
};
