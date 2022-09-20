import axios from "axios";
import { useState, useEffect } from "react";

const Trending = () => {
  const [content, setcontent] = useState([]);
  const fetching = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=9149e2ce082a8e7af1347082796ac1f0`
    );
    // console.log(data);
    setcontent(data.results);
  };
  useEffect(() => {
    fetching();
  }, []);

  return (
    <div>
      <span className="pagetitle">Trending</span>
    </div>
  );
};

export default Trending;
