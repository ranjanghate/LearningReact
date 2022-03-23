import React from 'react';

const Greet = (props) => {
  return (
    <div>
      <h1> Hello World {props.name} a.k.a {props.heroName} </h1>
      {props.children}  
    </div>
  )
}

export default Greet;
