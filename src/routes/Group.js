import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Home.module.css";
import Movie from "../components/Movie";
import Footer from "../components/Footer";

function Group() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const { group } = useParams();
  const getMovie = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?sort_by=year&${group}`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, [group]);
  console.log(group);
  return (
    <div>
      <div className={styles.container}>
        {loading ? (
          <h4>Loading...</h4>
        ) : (
          <div className={styles.movies}>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                medium_cover_image={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                g={movie.genres}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
export default Group;
