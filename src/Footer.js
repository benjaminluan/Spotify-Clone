import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";
import { Grid, Slider } from "@mui/material";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <img src="" alt="" className="footer__albumLogo" />
        <div className="footer__songInfo">
            <h4>test</h4>
            <p>test</p>
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
