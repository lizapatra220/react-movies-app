// import {  } from "@emotion/react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleContent from "../../SingleContent/SingleContent";
import Custompagination from "../../Pagination/Custompagination";
import { Button, Tab, Tabs, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./search.css";

const Search = () => {
  const [type, settype] = useState(0);
  const [searchText, setsearchText] = useState("");
  const [page, setpage] = useState(1);
  const [content, setcontent] = useState([]);
  const [numofpages, setnumofpages] = useState();
  const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      },
    },
  });
  const fetchSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/${
          type ? "tv" : "movie"
        }?api_key=9149e2ce082a8e7af1347082796ac1f0&language=en-US&query=${searchText}&page=${page}&include_adult=false`
      );
      setcontent(data.results);
      setnumofpages(data.total_pages);
      // console.log(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
    // eslint-disable-next-line
  }, [type, page]);
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <div className="search">
          <TextField
            style={{ flex: 1 }}
            className="searchbox"
            InputProps={{ style: { fontSize: 25 } }}
            InputLabelProps={{ style: { fontSize: 20, color: "white" } }}
            label="search"
            variant="filled"
            onChange={(e) => setsearchText(e.target.value)}
          />
          <Button
            onClick={fetchSearch}
            variant="contained"
            style={{ marginLeft: 10 }}
          >
            <SearchIcon fontSize="large" />
          </Button>
        </div>
        <Tabs
          value={type}
          indicatorColor="primary"
          textColor="primary"
          onChange={(event, newValue) => {
            settype(newValue);
            setpage(1);
          }}
          style={{ paddingBottom: 5 }}
          aria-lebel="disbaled tabs example"
        >
          <Tab style={{ width: "50%" }} label="Search Movies" />
          <Tab style={{ width: "50%" }} label="Search Tv Series" />
        </Tabs>
      </ThemeProvider>
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
        {searchText &&
          !content &&
          (type ? <h2>"Tv series not found"</h2> : <h2>"Movies not found"</h2>)}
      </div>
      {numofpages > 1 && (
        <Custompagination setpage={setpage} numofpages={numofpages} />
      )}
    </div>
  );
};

export default Search;
