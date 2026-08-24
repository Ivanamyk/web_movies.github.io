import React, { FC, useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { movie } from "../../../../api/movies";
import { MovieType } from "../../../../types/index";
import "./slider.css";

interface Props {
  data?: MovieType;
}

const Slider: FC<Props> = () => {
  const [movies, setMovies] = useState<MovieType[]>();

  useEffect(() => {
    movie
      .getPopularData()
      .then((response) => {
        setMovies(response.results);
      })
      .catch(() => {
        setMovies([]);
      });
  }, []);

  const imgBase = "https://image.tmdb.org/t/p/";
  const imgWith = "w1280";

  const topTen = movies && movies.slice(0, 10);

  return (
    <>
      <Carousel fade>
        {topTen &&
          topTen.map((movie: MovieType) => (
            <Carousel.Item key={movie.id} interval={1800}>
              <img
                className="d-block slider"
                src={imgBase + imgWith + movie.backdrop_path}
                alt="First slide"
              />
              <Carousel.Caption>
                <div className="movie-overview">
                  <h3>{movie.title}</h3>
                  <p>{movie.overview}</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
      </Carousel>
    </>
  );
};
export { Slider };
