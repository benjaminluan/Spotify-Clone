import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";
import { Grid, Slider } from "@mui/material";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import { useDataLayerValue } from "./DataLayer";
const Footer = () => {
  const [{ current_track }, dispatch] = useDataLayerValue();
  return (
    <div className="footer">
      <div className="footer__left">
        <img src={current_track?.item.album.images[0].url} alt="" className="footer__albumLogo" />
        <div className="footer__songInfo">
          <h4>{current_track?.item.album.name}</h4>
          <p>{current_track?.item.album.artists.map((artist) => artist.name)}</p>
        </div>
      </div>
      <div className="footer__center">
        <FontAwesomeIcon icon="fa-solid fa-shuffle" className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlinedIcon fontSize="large" className="footer__icon" />
        <SkipNextIcon className="footer__icon" />
        <FontAwesomeIcon icon="fa-solid fa-repeat" className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
