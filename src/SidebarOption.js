import React from "react";
import { useDataLayerValue } from "./DataLayer";
import "./SidebarOption.css";

const SidebarOption = ({ title, Icon, playlistData, spotify }) => {
  const [{}, dispatch] = useDataLayerValue();

  const getPlaylistUrl = (str) => {
    let uri = str.split(":");
    spotify.getPlaylist(uri[2]).then((response) => {
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response,
      });
    });
  };

  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h4
          onClick={() =>
            dispatch({
              type: "SET_DISCOVER_WEEKLY",
              discover_weekly: "",
            })
          }
        >
          {title}
        </h4>
      ) : (
        <p onClick={() => getPlaylistUrl(playlistData)}>{title}</p>
      )}
    </div>
  );
};

export default SidebarOption;
