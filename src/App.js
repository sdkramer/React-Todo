import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm'

const todos = [
  {
    task: '',
    id: null,
    completed: false
  },
  // {
  //   task: 'Bake Cookies',
  //   id: 1528817084358,
  //   completed: false
  // }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      todos
    }
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
addItem = (e, item) => {
  e.preventDefault();
  const newItem = {
    task: item,
    id: Date.now(),
    completed: false
  };
  this.setState({
    todos: [...this.state.todos, newItem]
  })
}

toggleItem = itemId => {
  console.log(itemId);
  this.setState({
    todos: this.state.todos.map(item => {
      if(itemId === item.id) {
        return {
          ...item, completed: !item.completed
        };
      }
      return item;
    })
  })
}

  render() {
    return (
      <div>
        <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem}/>
        </div>
        <div>
          <TodoList 
          todos={this.state.todos} toggleItem={this.toggleItem}/>
        </div>
        
      </div>
    );
  }
}

export default App;
