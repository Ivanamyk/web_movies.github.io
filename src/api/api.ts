import axios from "axios";

const configuredApiKey =
  process.env.REACT_APP_TMDB_API_KEY || process.env.REACT_APP_API_KEY;
const configuredReadAccessToken = process.env.REACT_APP_TMDB_READ_ACCESS_TOKEN;
const apiKey =
  configuredApiKey && !configuredApiKey.startsWith("replace_with_")
    ? configuredApiKey
    : undefined;
const readAccessToken =
  configuredReadAccessToken &&
  !configuredReadAccessToken.startsWith("replace_with_")
    ? configuredReadAccessToken
    : undefined;

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: apiKey && !readAccessToken ? { api_key: apiKey } : undefined,
  headers: readAccessToken
    ? { Authorization: `Bearer ${readAccessToken}` }
    : undefined,
});

export const hasTmdbCredentials = Boolean(apiKey || readAccessToken);

export { api };
