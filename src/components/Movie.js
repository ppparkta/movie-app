import propTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";
import Footer from "../components/Footer";

function Movie({ id, year, medium_cover_image, title, summary, g }) {
  return (
    <div>
      <div className={styles.movie}>
        <img
          src={medium_cover_image}
          alt={title}
          className={styles.movie__img}
        />
        <div>
          <h2 className={styles.movie__title}>
            <Link to={`/movie/${id}`}>
              {title && title.length > 50 ? `${title.slice(0, 50)}...` : title}
            </Link>
          </h2>
          <h3 className={styles.movie__year}>{year}</h3>
          <p>
            {summary && summary.length > 235
              ? `${summary.slice(0, 235)}...`
              : summary}
          </p>
          <ul className={styles.movie__genres}>
            {g.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  medium_cover_image: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string,
  genres: propTypes.string,
};
export default Movie;
