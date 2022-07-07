import React, { Component } from "react";
import Overview from './components/Overview';
import uniqid from "uniqid";

class App extends Component{
  constructor(){
    super();
    this.state = {
      task: { text: '', id: uniqid()},
      tasks:[]
    };
    this.addTask = this.addTask.bind(this);
    this.newInput = this.newInput.bind(this);
  }

  addTask(e) {
    //e.preventDefault();
    this.setState({
      task: { text: '', id: uniqid() },
      tasks: this.state.tasks.concat(this.state.task)
    });
    console.log(this.state.tasks);
  }

  newInput(task) {
    //console.log(task.target.value);
    this.setState({
      task: {
        text: task.target.value,
        id: this.state.task.id
      }
    });
  }

  render() {
    const { task, tasks } = this.state;
    return (
      <div className="App">
        <h3>React task app</h3>
        <input 
        type="text"
        onChange={this.newInput}
        value={task.text}
        />
        <button onClick={this.addTask}>Add</button>
        <Overview tasks={tasks}/>
      </div>
    );
  }
}

export default App;