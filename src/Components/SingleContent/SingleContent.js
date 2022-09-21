import { Badge } from "@mui/material";
import { img_300, unavailable } from "../../Config/Config";
import ContentModal from "../ContentModal/ContentModal";
import "./SingleContent.css";
const SingleContent = ({ id, title, poster, media, date, vote }) => {
  return (
    <ContentModal media={media} id={id}>
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
    </ContentModal>
  );
};

export default SingleContent;
