import React, { Component } from 'react';

class Counter extends Component {

    styles = { fontSize: '15px', fontWeight: 'bold' };
    render() { 
        return (
            <React.Fragment>
                <div>
                    <button onClick={() => this.props.onIncrement(this.props.counter)} 
                            className='btn btn-primary m-1'>+</button>
                    <button onClick={() => this.props.onDecrement(this.props.counter)} 
                            className='btn btn-primary m-1'
                            disabled={this.props.counter.value === 0 ? true : false}>-</button>
                    <button onClick={() => this.props.onDelete(this.props.counter.id)} 
                            className='btn btn-warning m-1'>Delete</button>
                    <span className={this.getBadgeClasses()} style={this.styles}>
                        { this.formatCount() }
                    </span>
                    <span>id: {this.props.counter.id}</span>
                </div>
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = 'm-2 badge text-bg-';
        classes += this.props.counter.value === 0 ? 'warning' : 'success';
        return classes;
    }

    formatCount() {
        // const { count } = this.state;
        // return count === 0 ? 'zero' : count;
        return this.props.counter.value === 0 ? 'zero' : this.props.counter.value;
    }
}
 
export default Counter;