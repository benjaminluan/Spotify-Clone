/* allows us to direct users to authentication website
when done it'll bring them back */
export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "https://spotify-clone-lovat-phi.vercel.app/";
const clientId = "d0f693e3e8234462a499ecbfa4c6a661";

/* These are the rules spotify put down.*/
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];


export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((inital, item) => {
      let parts = item.split("=");
      inital[parts[0]] = decodeURIComponent(parts[1])
      return inital
    }, {});
};
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

