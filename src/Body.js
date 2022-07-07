import React from "react";
import "./Body.css";
import { useDataLayerValue } from "./DataLayer";
import Header from "./Header";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SongRow from "./SongRow";
import Featured from "./Featured";
function Body({spotify}) {
  const [{ discover__weekly }, dispatch] = useDataLayerValue();

  return (
    <div className="body">
      <Header />
      {discover__weekly ? (
        <>
          <div className="body__info">
            <img src={discover__weekly?.images[0].url} alt="" />
            <div className="body__infoText">
              <strong>PLAYLIST</strong>
              <h2>{discover__weekly?.name}</h2>
              <p>{discover__weekly?.description}</p>
            </div>
          </div>
          <div className="body__songs">
            <div className="body__icons">
              <PlayCircleFilledIcon className="body__shuffle" />
              <FavoriteIcon fontSize="large" />
              <MoreHorizIcon />
            </div>
            {discover__weekly?.tracks.items.map((item) => (
              <SongRow track={item.track} />
            ))}
          </div>
        </>
      ) : (
        <Featured spotify = {spotify}/>
      )}
    </div>
  );
}

export default Body;
