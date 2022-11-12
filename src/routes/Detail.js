import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState();
  const getMovie = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    setMovies(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(movies);
  return (
    <div>
      {loading ? (
        <h4>Loading...</h4>
      ) : (
        <div>
          <img src={movies.large_cover_image} />
          <h1>{movies.title_long}</h1>
          <h4>평점{movies.rating}/10</h4>
          <span>
            {movies.genres.map((g) => (
              <span key={g}>{g} </span>
            ))}
          </span>
          <p>{movies.description_full}</p>
        </div>
      )}
    </div>
  );
}

export default Detail;
