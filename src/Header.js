import React from 'react';
import './header.css';

const Header = function(props){
    return (
    <div className="header">
      <h3>{props.heading}</h3>
      </div>
    );
}



export default  Header ;