import { Link } from "react-router";

export default function ReviewCard({
  index,
  id,
  title,
  summary,
  date,
  author,
  imageURL,
}) {
  return (
    <article
      className={`w-full max-w-[700px] cursor-pointer border-b border-gray-300 mb-6 px-4 md:px-0 ${index !== undefined ? "sm:border-b-0 sm:mb-0 sm:px-0" : ""} ${index === 3 || index === 4 ? "sm:hidden" : index === 0 ? "sm:pr-4 md:pr-4 sm:row-span-2 sm:border-r border-gray-300 h-full" : "sm:h-full"}`}
    >
      <Link className={`w-full h-full grid grid-cols-[3fr_1fr] gap-2 pb-6 ${index !== undefined ? "sm:grid-cols-1 sm:pb-0" : ""} ${index === 0 ? "sm:gap-12" : ""}`} to={`/review/${id}`}>
        <div className={`${index === 0 ? "sm:text-center sm:max-w-[360px] sm:mx-auto" : ""}`}>
          <h2
            className={`font-semibold text-lg ${index === 0 ? "sm:text-2xl" : ""}`}
          >{`${id}: ${title}`}</h2>
          <p className={`text-justify ${index !== undefined ? "sm:truncate" : ""} ${index === 0 ? "sm:text-center sm:text-lg sm:py-4" : ""}`}>{summary}</p>
          <span
            className={`text-sm text-zinc-600`}
          >{`${date} * ${author}`}</span>
        </div>
        <img
          className={`w-full rounded object-cover h-[72px] ${index !== undefined ? "sm:order-first sm:w-full sm:h-[100%]" : "sm:h-[100px]"}`}
          src={imageURL}
          alt={`${title} image`}
        />
      </Link>
    </article>
  );
}
