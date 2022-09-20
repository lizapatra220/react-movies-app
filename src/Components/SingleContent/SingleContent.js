import { Badge } from "@mui/material";
import { img_300, unavailable } from "../Config/Config";
import "./SingleContent.css";
const SingleContent = ({ id, title, poster, media, date, vote }) => {
  return (
    <div className="media">
      <Badge badgeContent={vote} color={vote > 6 ? "primary" : "secondary"} />
      <img
        className="poster"
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subtitle">
        {media === "tv" ? "tv series" : "movies"}
        <span className="subtitle">{date}</span>
      </span>
    </div>
  );
};

export default SingleContent;
