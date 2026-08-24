import React, { FC, useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Layout } from "./../../components/Layout";
import { movie } from "./../../api/movies";
import { MovieType } from "../../types";
import { IdMovie, Spinner } from "./components";

const Details: FC<RouteComponentProps<{ id: string }>> = ({ match }) => {
  const id = match.params.id;
  const [details, setDetails] = useState<MovieType | undefined>(undefined);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
    setDetails(undefined);
    movie
      .getId(id)
      .then((response) => {
        setDetails(response);
      })
      .catch(() => {
        setHasError(true);
      });
  }, [id]);

  return (
    <>
      <Layout>
        <div>
          {details ? (
            <IdMovie movies={details} />
          ) : hasError ? (
            <p className="text-center text-light p-5">
              Unable to load this movie right now.
            </p>
          ) : (
            <Spinner />
          )}
        </div>
      </Layout>
    </>
  );
};
export { Details };
