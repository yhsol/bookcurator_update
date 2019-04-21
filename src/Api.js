import Axios from "axios";

const api = Axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "fb2398f0003757361045d72497fe13c3",
    language: "ko-KR"
  }
});

export const movieApi = {
  popular: () => api.get("movie/popular"),
  upcoming: () => api.get("movie/upcoming"),
  nowPlaying: () => api.get("movie/now_playing"),
  movieDetail: id =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos similar"
      }
    }),
  search: term =>
    api.get("search/movie", {
      params: {
        query: encodeURI(term)
      }
    })
};

export const tvApi = {
  popular: () => api.get("tv/top_rated"),
  airingToday: () => api.get("tv/airing_today"),
  topRated: () => api.get("tv/top_rated"),
  tvDetail: id =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos similar"
      }
    }),
  search: term =>
    api.get("search/tv", {
      params: {
        query: encodeURI(term)
      }
    })
};
