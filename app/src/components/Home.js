import React, {useContext} from 'react';
import Context from '../context';

function Home () {
  const context = useContext(Context)

  console.log(context.orioles)


  return(
    <div>
      <h2>Welcome to PhotoSearch</h2>
      <p>To begin, please select an option above or type something into the search bar.</p>
    </div>
  )

}

export default Home;