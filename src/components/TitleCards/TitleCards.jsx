import React, { useEffect, useState } from 'react'
import "./TitleCards.css"
import { Link } from 'react-router-dom';

const TitleCards = ({title, type, category}) => {

  const [apiData, setApiData] = useState([]);
  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmY3YmUzZTUwMTc0NTRkZTc2YTNkZmYwY2E1N2Q3NCIsIm5iZiI6MTcyMzYxNDg0MS4xNTY3OTYsInN1YiI6IjY2YmM0NTM2ZjUwZmVmNDk4MDIxNWU4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MjmUzP5CjCMAjLq3Jp_SPgLHPIaa9Xqz5vhZhrMpkjw'
    }
  };
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/${type}/${category}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));
  },[])

  return (
    <div className='title-cards'>
        <h2>{title?title:"Popular on Netflix"}</h2>
        <div className="card-list">
          {apiData.map((card,index)=>{
            return <Link to={`/player/${card.id}`} className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
              <p>{type==="movie"?card.original_title:card.original_name}</p>
            </Link>
          })}
        </div>
    </div>
  )
}

export default TitleCards