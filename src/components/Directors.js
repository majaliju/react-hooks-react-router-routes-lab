import React from "react";
import { directors } from "../data";
import { v4 as uuid } from 'uuid';

function Directors() {

  const directorsList = directors.map(director => {
    return <div>
       <h2>Name: {director.name}</h2>
       <plaintext>Movies: </plaintext>
       <ul>
        {director.movies.map(movie => <li key={uuid()}>{movie}</li>)}
       </ul>
    </div>
   

  })

  return <div>
    <h1>Directors Page</h1>
    {directorsList}
  </div>;
}

export default Directors;
