import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { Chip } from "@mui/material";

const Genres = ({
  setselectedgenres,
  selectedgenres,
  genres,
  setgenres,
  setpage,
  type,
}) => {
  const handleAdd = (genre) => {
    setselectedgenres([...selectedgenres, genre]);
    setgenres(genres.filter((s) => s.id !== genre.id));
    setpage(1);
  };
  const handleRemove = (genre) => {
    setgenres([...genres, genre]);
    setselectedgenres(selectedgenres.filter((g) => g.id !== genre.id));
    setpage(1);
  };
  const fetchGenre = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=9149e2ce082a8e7af1347082796ac1f0&language=en-US`
    );
    setgenres(data.genres);
  };
  console.log(genres);
  useEffect(() => {
    fetchGenre();
    return () => {
      setgenres([]);
    };
  }, []);

  return (
    <div style={{ padding: "6px 0" }}>
      {genres.map((genre) => (
        <Chip
          label={genre.name}
          key={genre.id}
          size="small"
          clickable
          style={{ margin: 2, backgroundColor: "white", fontSize: 17 }}
          onClick={() => handleAdd(genre)}
        />
      ))}
      {selectedgenres.map((genre) => (
        <Chip
          label={genre.name}
          key={genre.id}
          size="small"
          clickable
          color="primary"
          style={{ margin: 2, fontSize: 17 }}
          onDelete={() => handleRemove(genre)}
        />
      ))}
    </div>
  );
};

export default Genres;
