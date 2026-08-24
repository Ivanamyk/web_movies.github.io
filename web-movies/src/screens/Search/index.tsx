import React, { FC, ChangeEvent, useEffect, useState } from "react";
import { movie } from "./../../api/movies";
import { MovieType } from "../../types";
import { useHistory } from "react-router-dom";
import { Form, Card, Button } from "react-bootstrap";
import wallSearch from "../../../src/assets/img/wall-search.jpg";
import noImg from "../../../src/assets/img/not-found.jpg";
import * as Icon from "react-bootstrap-icons";
import { Layout } from "../../components/Layout";
import "./search.css";

const Search: FC = () => {
  const [query, setQuery] = useState("");
  const [movieCard, setMovieCard] = useState<MovieType[]>();

  const history = useHistory();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      setMovieCard([]);
      history.replace("/search");
      return;
    }

    movie
      .getSearch(trimmedQuery)
      .then((response) => {
        setMovieCard(response);
        history.replace(`/search?s=${encodeURIComponent(trimmedQuery)}`);
      })
      .catch(() => {
        setMovieCard([]);
      });
  }, [query, history]);

  const imgBase = "https://image.tmdb.org/t/p/";
  const imgWidth = "w300";

  return (
    <>
      <Layout>
        <div
          className="main-pg"
          style={{ backgroundImage: `url(${wallSearch})` }}
        >
          <Form className="container col-6 search-group">
            <Form.Group controlId="formBasicEmail">
              <h4 className="title-search">Search Movies</h4>
              <Form.Control
                className="search-bar"
                type="text"
                value={query}
                onChange={onChange}
              />
            </Form.Group>
          </Form>
          <div className="row">
            {movieCard &&
              movieCard.map((movie: MovieType) => (
                <Card
                  key={movie.id}
                  className="search-card"
                  style={{ width: "15rem" }}
                >
                  <Card.Img
                    variant="top"
                    src={
                      movie.poster_path
                        ? imgBase + imgWidth + movie.poster_path
                        : noImg
                    }
                  />

                  <Card.Body className="card-body">
                    <Card.Title>{movie.title}</Card.Title>
                    <Button
                      className="eye-button"
                      type="button"
                      href={"/details/" + movie.id}
                    >
                      <Icon.EyeFill size={20} />
                    </Button>
                  </Card.Body>
                </Card>
              ))}
          </div>
        </div>
      </Layout>
    </>
  );
};
export { Search };
