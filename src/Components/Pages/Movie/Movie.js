import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import SingleContent from "../../SingleContent/SingleContent";
import Custompagination from "../../Pagination/Custompagination";
import Genres from "./Genres";

const Movie = () => {
  const [page, setpage] = useState(1);
  const [content, setcontent] = useState([]);
  const [numofpages, setnumofpages] = useState();
  const [selectedgenres, setselectedgenres] = useState([]);
  const [genres, setgenres] = useState([]);
  const fetchmovie = async () => {
    const { data } = await axios.get(`
  
    https://api.themoviedb.org/3/discover/movie?api_key=9149e2ce082a8e7af1347082796ac1f0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate

    `);
    setcontent(data.results);
    setnumofpages(data.total_pages);
  };
  useEffect(() => {
    fetchmovie();
  }, [page]);

  return (
    <div>
      <span className="pagetitle">Movies</span>
      {/* <Genres
        type="movie"
        selectedgenres={selectedgenres}
        genres={genres}
        setselectedgenres={setselectedgenres}
        setgenres={setgenres}
        setpage={setpage}
      /> */}
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              title={c.title || c.name}
              poster={c.poster_path}
              media_type="movie"
              date={c.first_air_date || c.release_date}
              vote={c.vote_average}
            />
          ))}
      </div>
      {numofpages > 1 && (
        <Custompagination setpage={setpage} numofpages={numofpages} />
      )}
    </div>
  );
};

export default Movie;
