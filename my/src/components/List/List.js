import React from 'react';

let List = (props) => (

        <ul>
          {props.items.map((item,index) => <li key={index}>{item.todo}
          <button onClick = {() => props.onComplete(index)}>{item.complete?'done':'todo'}</button>
        </li>)}</ul>

  );



export default List;
