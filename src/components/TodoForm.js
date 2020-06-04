import React from 'react';

class TodoForm extends React.Component {
constructor() {
  super();
  this.state = {
    item: ''
  };
}

render() {
  return (
    <form>
      <input type='text' value='this.state.item' name='item'/>
      <button>Add Something To Do</button>
    </form>
  )
}

}

export default TodoForm;