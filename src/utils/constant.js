export const  LOGO_URL="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const BG_URL="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const DEFAULT_AVATAR_URL = "https://res.cloudinary.com/daxugagt0/image/upload/v1764598691/pnpc4lysz4q9e1jqb4rx.jpg";

export const NOW_PLAYING_MOVIES_URL="https://api.themoviedb.org/3/movie/now_playing?page=1";

export const POPULAR_MOVIES_URL="https://api.themoviedb.org/3/movie/popular?page=1";

export const TOP_RATED_MOVIES_URL="https://api.themoviedb.org/3/movie/top_rated?page=1";

export const UPCOMING_MOVIES_URL="https://api.themoviedb.org/3/movie/upcoming?page=1";

export const API_OPTIPONS =  {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
    }
  };

