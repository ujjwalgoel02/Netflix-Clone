import React, { useEffect, useState } from "react";
import "./SpecificMovie.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import back_icon from "../../assets/back_arrow_icon.png";
import { useNavigate } from "react-router-dom";
import TitleCards from "../../components/TitleCards/TitleCards";


const SpecificMovie = ({ title, category }) => {
  // const [apiData, setApiData] = useState([]);
  const navigate = useNavigate();

  // const options = {
  //   method: "GET",
  //   headers: {
  //     accept: "application/json",
  //     Authorization:
  //       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmY3YmUzZTUwMTc0NTRkZTc2YTNkZmYwY2E1N2Q3NCIsIm5iZiI6MTcyMzYxNDg0MS4xNTY3OTYsInN1YiI6IjY2YmM0NTM2ZjUwZmVmNDk4MDIxNWU4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MjmUzP5CjCMAjLq3Jp_SPgLHPIaa9Xqz5vhZhrMpkjw",
  //   },
  // };

  // useEffect(() => {
  //   fetch(
  //     `https://api.themoviedb.org/3/trending/${category}/week?language=en-US`,
  //     options
  //   )
  //     .then((response) => response.json())
  //     .then((response) => setApiData(response.results))
  //     .catch((err) => console.error(err));
  // }, []);

  return (
    <div>
      <img
        className="back-img"
        src={back_icon}
        alt=""
        onClick={() => {
          navigate(-1);
        }}
      />
      <div className="movies">
        <h2>{title ? title : "Home"}</h2>
        {/* <div className="movie-list">
          {apiData.map((card, index) => {
            return (
              <Link to={`/player/${card.id}`} className="card" key={index}>
                <img
                  src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                  alt=""
                />
                <p>{category==="tv"?card.original_name:card.original_title}</p>
              </Link>
            );
          })}
        </div> */}
      </div>
      <div className="more-cards">
        <TitleCards
          title={category === "tv" ? "Ariving Today" : category==="movie"?"Now Playing":"New Collection"}
          type={category}
          category={category === "tv" ? "airing_today" : category==="movie"?"now_playing":"all/day"}
        />
        <TitleCards
          title={category === "tv" ? "On The Air" : category==="movie"?"Popular":"Popular in Peoples"}
          type={category}
          category={category === "tv" ? "on_the_air" : category==="movie"?"popular":"person/day"}
        />
        <TitleCards
          title={category === "tv" ? "Popular" : category==="movie"?"Top Rated":"Popular in TV Shows"}
          type={category}
          category={category === "tv" ? "popular" : category==="movie"?"top_rated":"tv/day"}
        />
        <TitleCards
          title={category === "tv" ? "Top Rated" : category==="movie"?"Upcoming":"Popular in Movie"}
          type={category}
          category={category === "tv" ? "top_rated" : category==="movie"?"upcoming":"movie/day"}
        />
      </div>
    </div>
  );
};

export default SpecificMovie;
