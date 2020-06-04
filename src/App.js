import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm'

const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
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

  render() {
    return (
      <div>
        <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm />
        </div>
        <div>
          <TodoList 
          todos={this.state.todos}/>
        </div>
        
      </div>
    );
  }
}

export default App;
