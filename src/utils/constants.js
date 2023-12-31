export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR = "https://occ-0-1492-3663.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229";

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTZhY2I3MDEzZGJhNTUzZmU3MmZhOTM5NTdmNmE0OCIsInN1YiI6IjY1MWI1Nzc2YzUwYWQyMDBlYWJmNGYwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tZ52grr6eIIVWycect69WV9q4ZfpvTTFpgj3fjGXgw4'
    }
}

export const IMG_CDN = "https://image.tmdb.org/t/p/w500";

export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_small.jpg";

export const SUPPORTED_LANGUAGES = [
  {identifier: "english", name: "English"}, 
  {identifier: "hindi", name: "Hindi"}, 
  {identifier: "spanish", name: "Spanish"}, 
  {identifier: "chinese", name: "Chinese"}, 
  {identifier: "french", name: "French"}
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_API_KEY;