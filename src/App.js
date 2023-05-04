import { Component } from 'react';
import './App.css';
import Counters from './components/counters';
import NavBar from './components/navbar';

class App extends Component {
  state = { 
      counters: [
          { id: 1, value: 1 },
          { id: 2, value: 2 },
          { id: 3, value: 3 },
          { id: 4, value: 0 },
      ]
  };

  handleDelete = (id) => {
      const counters = this.state.counters.filter( c => c.id !== id);
      // console.log(counters);
      this.setState({counters});
  }

  handleIncrement = (counter) => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter};
      counters[index].value++;
      this.setState({ counters });
  }

  handleDecrement = (counter) => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter};
      counters[index].value--;
      this.setState({ counters });
  }

  handleReset = () => {
      const counters = this.state.counters.map(c => {
          c.value = 0;
          return c;
      });
      this.setState({counters});
  }

  handleAdd = () => {
      const counters = [...this.state.counters];
      if(counters.length > 0) {
        const id = counters[counters.length - 1].id + 1;
        counters.push({id, value: 0});
      } else {
        counters.push({id: 0, value: 0});
      }
      this.setState({counters});
  }

  render() { 
    return(
      <div className="App">
        <NavBar totalCounters={
          // this.state.counters.filter(c => c.value > 0).length
          this.state.counters.reduce((t, c) => t + c.value, 0)
        }></NavBar>
        <div className='container'>
          <Counters
              counters={this.state.counters}
              onReset={this.handleReset}
              onAdd={this.handleAdd}
              onDelete={this.handleDelete}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              ></Counters>
        </div>
      </div>
    );
  }
}

export default App;
