import React, { useState, useEffect } from "react";
import axios from "axios";
import Singlecontent from "../../components/Singlecontent/Singlecontent";
import Customepagination from "../../components/Pagination/Customepagination";
import Genres from "../../components/Genres/Genres";
import useGenre from "../../hooks/useGeners";

const Series = () => {
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState(100);
  const genreforURL = useGenre(selectedGenres);

  const fetchmovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate&with_genres=${genreforURL}`
    );
    setContent(data.results);
    setNumOfPages(data.total_pages);

    console.log(numOfPages);
  };

  useEffect(() => {
    fetchmovies();
    // eslint-disable-next-line
  }, [genreforURL, page]);
  return (
    <div>
      <span className="pageTitle">TV Series</span>
      <Genres
        type="tv"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />
      <div className="trending">
        {content &&
          content.map((c) => (
            <Singlecontent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type="tv"
              vote_average={c.vote_average}
            />
          ))}
      </div>
      {numOfPages > 1 && (
        <Customepagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
};

export default Series;
