import React from "react";
import { img_300, unavailable } from "../../config/config";
import "./Singlecontent.css";
import { Badge } from "@material-ui/core";
import ContentModel from "../Contentmodel/Contentmodel";
const Singlecontent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <ContentModel media_type={media_type} id={id}>
      <Badge
        badgeContent={vote_average.toFixed(1)}
        color={vote_average > 7 ? "primary" : "secondary"}
      />
      <img
        className="poster"
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{date}</span>
      </span>
    </ContentModel>
  );
};

export default Singlecontent;
