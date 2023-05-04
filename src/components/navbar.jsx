import React from 'react';

const NavBar = (props) => {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                Total items: {props.totalCounters}
            </div>
        </nav>
    );
}
 
export default NavBar;