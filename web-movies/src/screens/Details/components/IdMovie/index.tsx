import React, { FC, useEffect, useState } from "react";
// import { Link } from 'react-router-dom';
import { movie } from "./../../../../api/movies";
import { MovieType, Genre, VideoType } from "../../../../types";
import { Card } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import "./idMovies.css";

interface Props {
  movies: MovieType;
}

const videoBase = "https://www.youtube.com/watch?v=";
const imgBase = "https://image.tmdb.org/t/p/";
const imgWidth = "w500";
const bgWidth = "w1280";

const IdMovie: FC<Props> = ({ movies }) => {
  const [video, setVideo] = useState<VideoType | undefined>(undefined);

  useEffect(() => {
    movie
      .getVid(`${movies.id}`)
      .then((response) => {
        setVideo(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [movies.id]);

  return (
    <>
      <div
        className="main-pg"
        style={{
          backgroundImage: `url(${imgBase + bgWidth + movies.backdrop_path})`,
        }}
      >
        <div className="card-movie">
          <div className="container ">
            <div className="row">
              <div className="col-5 poster">
                <Card>
                  <Card.Img
                    variant="top"
                    alt={movies.title}
                    src={imgBase + imgWidth + movies.poster_path}
                  />
                </Card>
              </div>
              <div className="data-header col-5">
                <h2 className="movie-title">
                  {movies.title}{" "}
                  <span className="date">
                    ({movies.release_date.slice(0, 4)})
                  </span>
                </h2>
                <div className="data-info">
                  <h3 className="info-title">Information</h3>
                  <p>{movies.overview}</p>
                  <h4 className="genres-title">Genres</h4>
                  <u className="genres">
                    {movies.genres &&
                      movies.genres.map((genre: Genre) => (
                        <li key={genre.id}>{genre.name}</li>
                      ))}
                  </u>
                  {video?.results[0]?.key && (
                    <a
                      className="btn btn-trailer"
                      href={videoBase + video.results[0].key}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.PlayCircle /> Watch Trailer
                    </a>
                  )}
                  {/* <Link className='btn-trailer' to={<iframe width="1600" height="774" src={videoBase} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>cLICK</iframe>} /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export { IdMovie };
