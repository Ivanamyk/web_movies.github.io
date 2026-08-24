import React, { FC } from "react";
import { MovieType } from "../../types";
import { Card, Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import "./cards.css";

interface Props {
  pag: number;
  moviesList: MovieType[] | undefined;
  title: string;
}

const Cards: FC<Props> = ({ moviesList, title }) => {
  const imgBase = "https://image.tmdb.org/t/p/";
  const imgWidth = "w300";

  return (
    <>
      <div className="main-pg">
        <h2 className="page-title">{title}</h2>
        <div className="row justify-content-center">
          {moviesList &&
            moviesList.map((movie: MovieType) => (
              <Card
                key={movie.id}
                className="nm-card"
                style={{ width: "15rem" }}
              >
                <Card.Img
                  className="card-img"
                  variant="top"
                  title={movie.title}
                  src={imgBase + imgWidth + movie.poster_path}
                />
                <Card.Title className="nm-title">{movie.title}</Card.Title>
                <Button
                  className="eye-btn"
                  type="button"
                  href={"/details/" + movie.id}
                >
                  <Icon.EyeFill size={20} />
                </Button>
              </Card>
            ))}
        </div>
      </div>
    </>
  );
};
export { Cards };
