import axios from "axios";
import { useState, useEffect } from "react";
import Custompagination from "../../Pagination/Custompagination";
import SingleContent from "../../SingleContent/SingleContent";
import "./Trending.css";

const Trending = () => {
  const [page, setpage] = useState(1);
  const [content, setcontent] = useState([]);
  const fetching = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=9149e2ce082a8e7af1347082796ac1f0 `
    );
    console.log(data.results);
    setcontent(data.results);
  };
  useEffect(() => {
    window.scroll(0, 0);
    fetching();
  }, [page]);

  return (
    <div>
      <span className="pagetitle">Trending</span>
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              title={c.title || c.name}
              poster={c.poster_path}
              media_type={c.media_type}
              date={c.first_air_date || c.release_date}
              vote={c.vote_average}
            />
          ))}
      </div>
      <Custompagination setpage={setpage} />
    </div>
  );
};

export default Trending;
