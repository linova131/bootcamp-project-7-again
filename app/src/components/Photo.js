import React from 'react';

function Photo(props) {
  const server = props.server;
  const id = props.id;
  const secret = props.secret;
  const url = `https://live.staticflickr.com/${server}/${id}_${secret}.jpg`
  
  return (
    <li>
      <img src={url} alt={props.title}/>
  </li>
  );
}

export default Photo;