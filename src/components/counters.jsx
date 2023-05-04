import React, { Component } from 'react';
import Counter from './counter'; 


class Counters extends Component {
    
    render() { 
        return (
            <React.Fragment>
                <button className='btn btn-secondary m-2' onClick={this.props.onReset}>Reset</button>
                <button className='btn btn-success m-2' onClick={this.props.onAdd}>Add item</button>
                { this.props.counters.map(c => ( 
                <Counter key={c.id} 
                         counter={c}
                         onDelete={this.props.onDelete}
                         onIncrement={this.props.onIncrement}
                         onDecrement={this.props.onDecrement}
                         ></Counter>)
                ) }
            </React.Fragment>  
        );
    }
}
 
export default Counters;