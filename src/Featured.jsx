import React from "react";
import { useDataLayerValue } from "./DataLayer";
import "./Featured.css";
const Featured = ({spotify}) => {
  const [{ featured }, dispatch] = useDataLayerValue();

  const getPlaylistUrl = (str) => {
     let uri = str.uri.split(":");
     spotify.getPlaylist(uri[2]).then((response) => {
       dispatch({
         type: "SET_DISCOVER_WEEKLY",
         discover_weekly: response,
       });
     });
  };

  return (
    <div className="featured">
      <h1>Featured Playlists</h1>
      <div className="featured__playlists">
        {featured?.playlists.items
          .map((item) => (
            <div className="featured__playlist">
              <img
                src={item.images[0].url}
                alt=""
                className=""
                onClick={() => getPlaylistUrl(item)}
              />
              <h4>{item.name}</h4>
              <p>PLAYLIST</p>
            </div>
          ))
          .splice(0, 8)}
      </div>
    </div>
  );
};

export default Featured;
