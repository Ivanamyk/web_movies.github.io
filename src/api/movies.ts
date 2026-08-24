import { MovieType, VideoType } from "./../types";
import { api, hasTmdbCredentials } from "./api";

export type GetMoviesResponse = {
  results: MovieType[];
  page: number;
  total_pages: number;
  total_results: number;
};

const emptyMoviesResponse: GetMoviesResponse = {
  results: [],
  page: 1,
  total_pages: 0,
  total_results: 0,
};

const getPopular = async (page: number): Promise<MovieType[]> => {
  if (!hasTmdbCredentials) return [];

  try {
    const { data } = await api.get<GetMoviesResponse>("movie/popular", {
      params: { page },
    });
    return data.results;
  } catch {
    return [];
  }
};

const getPopularData = async (): Promise<GetMoviesResponse> => {
  if (!hasTmdbCredentials) return emptyMoviesResponse;

  try {
    const { data } = await api.get<GetMoviesResponse>("movie/popular");
    return data;
  } catch {
    return emptyMoviesResponse;
  }
};

const getLatest = async (page: number): Promise<MovieType[]> => {
  if (!hasTmdbCredentials) return [];

  try {
    const { data } = await api.get<GetMoviesResponse>("movie/upcoming", {
      params: { page },
    });
    return data.results;
  } catch {
    return [];
  }
};

const getLatestData = async (): Promise<GetMoviesResponse> => {
  if (!hasTmdbCredentials) return emptyMoviesResponse;

  try {
    const { data } = await api.get<GetMoviesResponse>("movie/upcoming");
    return data;
  } catch {
    return emptyMoviesResponse;
  }
};

const getTopRated = async (): Promise<MovieType[]> => {
  if (!hasTmdbCredentials) return [];

  try {
    const { data } = await api.get<GetMoviesResponse>("movie/top_rated");
    return data.results;
  } catch {
    return [];
  }
};

const getId = async (id: string) => {
  if (!hasTmdbCredentials) return undefined;

  const data = await api.get<MovieType>("/movie/" + id);
  return data.data;
};

const getVid = async (id: string) => {
  if (!hasTmdbCredentials) return undefined;

  const data = await api.get<VideoType>("/movie/" + id + "/videos");
  return data.data;
};

const getSearch = async (query: string): Promise<MovieType[]> => {
  if (!hasTmdbCredentials) return [];

  try {
    const { data } = await api.get<GetMoviesResponse>("search/movie", {
      params: { query },
    });
    return data.results;
  } catch {
    return [];
  }
};

export const movie = {
  getPopular,
  getPopularData,
  getTopRated,
  getLatest,
  getLatestData,
  getId,
  getVid,
  getSearch,
};
