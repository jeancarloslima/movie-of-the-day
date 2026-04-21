import { useNavigate, useParams } from "react-router";
import ErrorPage from "../ErrorPage";

export default function ReviewPage({ reviews }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const filme = reviews.find((item) => item.id === id);

  if (!filme) {
    return <ErrorPage />;
  }

  return (
    <div>
      <div>
        <h2>{`${filme.id}: ${filme.title}`}</h2>
        <p>{filme.summary}</p>
        <span>{`${filme.date} * ${filme.author}`}</span>
      </div>
      <div>
        <h3>{filme.title}</h3>
        <img src={filme.coverURL} alt={`${filme.title} cover`} />
        <h4>Star Rating: {filme.rating} / 5</h4>
        <h4>Duration: {filme.duration}</h4>
        <h4>Director: {filme.director}</h4>
        <h4>Sinopsys: {filme.synopsys}</h4>
        <h3>{filme.subtitle}</h3>
        <p>{filme.text}</p>
      </div>
    </div>
  );
}
