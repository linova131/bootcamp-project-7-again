import React, {useState} from 'react';
import apiKey from './config';
import axios from 'axios';

const Context = React.createContext();

export const Provider = (props) => {
  
  //Establishing state
  const [loading, setLoading] = useState(false);
  const [orioles, setOrioles] = useState({});
  const [kingfishers, setKingfishers] = useState('');
  const [magpies, setMagpies] = useState('');
  const [searchResults, setSearchResults] = useState({});
  const [test, setTest] = useState('');

  //Helper Functions
 
  function performSearch(searchTerm) {
    axios(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${searchTerm}&format=json&nojsoncallback=1&per_page=24&sort=relevance`)
      .then((response) => {
        console.log(response)
        setSearchResults(response.data)
        console.log(searchResults)
      })
      .then(()=>{
        setTest('well the test worked')
        console.log(test)
      })
      .then(console.log('well we got to the second then statement'))
      .catch((error) => {
        console.log('Something went wrong with the courses fetch')
      })
  }

 
  // async function performSearch(searchTerm) {
  //   console.log(searchTerm)
  //   try {
  //     let results = await axios(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${searchTerm}&format=json&nojsoncallback=1&per_page=24&sort=relevance`)
  //     // results = results.data;
  //     // console.log(results)
  //     setKingfishers('liz')
  //     console.log(kingfishers)
  //     setSearchResults(results.data)
  //     console.log(results.data)
  //     console.log(searchResults)  
  //   } catch (err) {
  //     console.log(err)
  //   }

  // }

  // function performSearch(searchTerm) {
  //   setLoading(true);
  //   fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${searchTerm}&format=json&nojsoncallback=1&per_page=24&sort=relevance`)
  //   .then((data)=> data.json())
  //   // .then((results) => {
  //   //   setSearchResults(results)
  //   //   console.log(searchResults)
  //   // })
  //   // .then(() => {
  //   //   setSearchResults('monkey')
  //   //   console.log(searchResults)
  //   // })
  //   .catch((error) => {
  //       console.log('Sorry! Something went wrong with the fetch...', error)
  //     })
  // }

  return(
    <Context.Provider value={{
      performSearch,
      setSearchResults,
      searchResults,
      test,
      setTest
    }}>
      {props.children}
    </Context.Provider>
  );

}

export default Context;