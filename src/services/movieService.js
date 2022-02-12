import http from "./httpService";

function movieUrl(s) {
  return `/?s=${s}`;
}

export function getMovies(s) {
  return http.get(movieUrl(s));
}
