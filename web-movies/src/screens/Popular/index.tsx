import React, { FC, useState, useEffect } from "react";
import { RouteComponentProps } from "react-router";
import { MovieType } from "./../../types";
import { movie } from "./../../api/movies";
import { Layout } from "../../components/Layout";
import { Cards } from "./../../components/Cards";
import { Paginator } from "./../../components/Paginator";

const Popular: FC<RouteComponentProps<{ pag: string }>> = ({ match }) => {
  const page = parseInt(match.params.pag);
  const [totalPages, setTotalPages] = useState<number>();
  const [popularMovies, setPopularMovies] = useState<MovieType[]>();

  useEffect(() => {
    movie
      .getPopularData()
      .then((response) => {
        setTotalPages(response.total_pages);
      })
      .catch(() => {
        setTotalPages(0);
      });
  }, []);

  useEffect(() => {
    movie
      .getPopular(page)
      .then((response) => {
        setPopularMovies(response);
      })
      .catch(() => {
        setPopularMovies([]);
      });
  }, [page]);

  return (
    <>
      <Layout>
        <Cards pag={page} moviesList={popularMovies} title="Most Popular" />
        <Paginator totPages={totalPages} />
      </Layout>
    </>
  );
};
export { Popular };
