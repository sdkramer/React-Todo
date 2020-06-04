import React from 'react';

const TodoList = props => {
<div>
  {props.todos.map(item => (
    <Todo key={item.id} item={item} />
  ))}
  <button>Clear List</button>
</div>
};

export default TodoList;