import { Link } from "react-router";

export default function ReviewCard({
  id,
  title,
  summary,
  date,
  author,
  imageURL,
}) {
  return (
    <article className="w-full max-w-[600px] cursor-pointer relative border-b border-gray-300 mb-6">
      <Link className="block pb-8" to={`/review/${id}`}>
        <h2 className="text-lg font-semibold w-7/10">{`${id}: ${title}`}</h2>
        <p className="text-justify w-7/10 md:py-2">{summary}</p>
        <span className="text-sm text-zinc-600 w-7/10">{`${date} * ${author}`}</span>
        <img
          className="w-2/10 h-[72px] md:w-[160px] sm:h-[80px] md:h-[100px] absolute right-0 top-0 rounded-lg object-cover"
          src={imageURL}
          alt={`${title} image`}
        />
      </Link>
    </article>
  );
}
