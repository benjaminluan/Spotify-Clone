import Login from "./Login";
import React, { useEffect, useState } from "react";
import { getTokenFromUrl } from "./spotify";
import Player from "./Player";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";
const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
      spotify.getPlaylist("1MAeTOYlLixDlaieDh2PBO").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
      spotify.getMyCurrentPlayingTrack().then((track) => {
        dispatch({
          type:"CURRENTLY_PLAYING_TRACK",
          current_track: track,
        })
      });
      spotify.getMyRecentlyPlayedTracks().then((tracks) => {
        dispatch({
          type:"RECENT_TRACKS",
          recent_tracks: tracks,
        })
      });
    }
  }, []);

  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
