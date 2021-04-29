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

  //Helper Functions

  async function performSearch(searchTerm) {
    try {
      let results = await axios(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${searchTerm}&format=json&nojsoncallback=1&per_page=24&sort=relevance`)
      // results = results.data;
      if (searchTerm === 'orioles') {
        setOrioles(results.data.photos.photo)
      } else if (searchTerm === 'kingfishers') {
        setKingfishers(results.data.photos.photo)
      } else if (searchTerm === 'magpies') {
        setMagpies(results.data.photos.photo)
      } else {
        setSearchResults(results.data.photos.photo)
      }
    } catch (err) {
      console.log(err)
    }
}

  return(
    <Context.Provider value={{
      performSearch,
      setSearchResults,
      searchResults,
      orioles,
      kingfishers,
      magpies
    }}>
      {props.children}
    </Context.Provider>
  );

}

export default Context;