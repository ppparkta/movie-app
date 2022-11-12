import propTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, medium_cover_image, title, summary, g }) {
  return (
    <div>
      <img src={medium_cover_image} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>
          {title && title.length > 50 ? `${title.slice(0, 50)}...` : title}
        </Link>
      </h2>
      <p>
        {summary && summary.length > 235
          ? `${summary.slice(0, 235)}...`
          : summary}
      </p>
      <ul>
        {g.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
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
