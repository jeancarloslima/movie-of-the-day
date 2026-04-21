import { useNavigate, useParams } from "react-router";
import ErrorPage from "../ErrorPage";
import { useEffect } from "react";

export default function ReviewPage({ reviews }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const filme = reviews.find((item) => item.id === id);

  if (!filme) {
    return <ErrorPage />;
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, []);

  console.log(filme);
  

  return (
    <div className="flex flex-col gap-8 mx-auto w-full max-w-[732px] px-4 py-8">
      <div>
        <h2 className="text-lg font-semibold">{`${filme.id}: ${filme.title}`}</h2>
        <p className="text-justify">{filme.summary}</p>
        <span className="text-sm text-zinc-600">{`${filme.date} * ${filme.author}`}</span>
      </div>
      <div>
        <h3 className="text-3xl font-bold">{filme.title}</h3>
        <img className="w-full max-w-[450px] mx-auto py-6" src={filme.coverURL} alt={`${filme.title} cover`} />
        <h4 className="text-2xl font-bold">Star Rating:</h4>
        <p className="pb-4 pt-2 text-lg">{filme.rating} / 5</p>
        <h4 className="text-2xl font-bold">Duration:</h4>
        <p className="pb-4 pt-2 text-lg">{filme.duration}</p>
        <h4 className="text-2xl font-bold">Director:</h4>
        <p className="pb-4 pt-2 text-lg">{filme.director}</p>
        <h4 className="text-2xl font-bold">Sinopsis:</h4>
        <p className="pb-4 pt-2 text-lg text-justify">{filme.synopsis}</p>
        <iframe className="w-full h-[410px] rounded-lg my-4" src={filme.trailerURL} allowFullScreen title="Embedded youtube" />
        <h3 className="text-2xl font-bold pt-4">{filme.subtitle}</h3>
        <div dangerouslySetInnerHTML={{ __html: filme.text}}></div>
      </div>
    </div>
  );
}
