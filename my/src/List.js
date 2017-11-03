import React from 'react';
//import logo from './logo.svg';
import './App.css';


let List = (props) => (

        <ul>
          {props.items.map((item,index) => (<li key={index}>{item}</li>))}
        </ul>

  );



export default List;
