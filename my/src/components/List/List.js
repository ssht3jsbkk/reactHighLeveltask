import React from 'react';

let List = (props) => {
const staticStyle = {padding: 20};
const textStyle = {color: 'pink', fontStyle: 'italic', fontSize: 50, fontWeight: 'bold', fontFamily: 'Georgia'};
const style = {complete: {color: 'green', backgroundColor: 'yellow'}, incomplete: {color: 'red', borderRadius: 200, backgroundColor: 'orange'}};

        return(<ul>
          {props.items.map((item,index) => <li style={{...staticStyle, ...textStyle}} key={index}>{item.todo}
          <button style={{...staticStyle, ...style[item.complete?'complete':'incomplete']}} onClick = {() => props.onComplete(index)}>{item.complete?'done':'todo'}</button>
        </li>)}
      </ul>)

};


export default List;
