import React from "react";
import axios from "axios";
import { useEffect } from "react";

const Genres = (
  setselectedgenre,
  selectedgenres,
  genres,
  setgenres,
  setpage,
  type
) => {
  const fetchmovie = async () => {
    const { data } = await axios.get(`
      
           https://api.themoviedb.org/3/genre/movie/list?api_key=9149e2ce082a8e7af1347082796ac1f0&language=en-US
    
        `);
    setgenres(data.genres);
  };
  console.log(genres);
  useEffect(() => {
    fetchmovie();
    return () => {
      setgenres({});
    };
  }, []);

  return <div></div>;
};

export default Genres;
