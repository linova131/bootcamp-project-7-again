import React, {useContext} from 'react';
import {useParams} from 'react-router-dom';
import Photo from './Photo';
import Context from '../context';

function PhotoContainer(props) {
  const context = useContext(Context)

  const photoData = context.orioles
  console.log(typeof photoData)
  console.log(photoData)
  let photos = [];

  // //Changes the API information into photo items
  // photos = photoData.map(photo =>
  //   <Photo server={photo.server} id={photo.id} secret={photo.secret} title={photo.title} key={photo.id}/>
  // );
 for (const photo in photoData) {
   console.log(photo)
 }
  return(
    <p>Hello i'm a photocontainer</p>
  )
}

export default PhotoContainer;