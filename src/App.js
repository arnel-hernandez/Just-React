import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import About from './components/folder/about'
import Header from './components/layout/layer'
import uuid from 'uuid'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
    state = {
        todos: [{
                id: uuid.v4(),
                title: 'Clean Car',
                completed: false
            },
            {
                id: uuid.v4(),
                title: 'Clean House',
                completed: false
            },
            {
                id: uuid.v4(),
                title: 'Mow the Yard',
                completed: false
            }
        ]
    }
    // TOGGLE COMPLETE MARKING
    markComplete = (id) => {
        this.setState({ todos: this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo;
        })})
    }

    // DELETE TODO
    delTodo = (id) => {
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
    }

    //ADD TODO

    addTodo = (title) => {
        const newTodo = {
            id: uuid.v4(),
            title: title,
            completed: false
        }
        this.setState({ todos: [...this.state.todos, newTodo]})
    }

    render() {
        console.log(this.state.todos);
        return (
            <Router>
            <div className = "App" >
                <div className='container'>
                    <Header />
                    <Route exact path='/' render={props => (
                        <React.Fragment>
                            <AddTodo addTodo={this.addTodo} />
                            <Todos todos={this.state.todos} markComplete= {this.markComplete} delTodo={this.delTodo}/>
                        </React.Fragment>
                    )} />
                    <Route path='/about' component={About} />
                </div>
            </div >
            </Router>
        );
    }
}

export default App;