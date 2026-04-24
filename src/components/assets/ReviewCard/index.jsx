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
      className={`w-full max-w-[770px] cursor-pointer border-b border-gray-300 mb-6 md:px-0 ${index !== undefined ? "sm:border-b-0 sm:mb-0 sm:px-0" : ""} ${index === 0 ? "px-0 sm:px-4 sm:pr-4 md:pr-4 sm:row-span-2 sm:border-r border-gray-300 h-full" : "sm:h-full px-4"}`}
    >
      <Link className={`w-full h-full grid gap-2 pb-6 ${index !== undefined ? "sm:grid-cols-1 sm:pb-0" : ""} ${index === 0 ? "grid-cols-1 sm:gap-12" : "grid-cols-[3fr_1fr]"}`} to={`/review/${id}`}>
        <div className={`${index === 0 ? "sm:text-center sm:max-w-[360px] sm:mx-auto" : ""}`}>
          <h2
            className={`font-semibold ${index === 0 ? "text-2xl px-4 sm:px-0" : "text-lg"}`}
          >{`${id}: ${title}`}</h2>
          <p className={`text-justify ${index !== undefined ? "sm:truncate" : ""} ${index === 0 ? "sm:text-center sm:text-lg py-2 px-4 sm:px-0 sm:py-4" : ""}`}>{summary}</p>
          <span
            className={`text-sm text-zinc-600 ${index === 0 ? "px-4 sm:px-0" : ""}`}
          >{`${date} * ${author}`}</span>
        </div>
        <img
          className={`w-full rounded object-cover h-[72px] ${index === 0 ? "min-h-[230px] order-first rounded-none" : ""} ${index !== undefined ? "sm:order-first sm:w-full sm:h-[100%]" : "sm:h-[100px]"}`}
          src={imageURL}
          alt={`${title} image`}
        />
      </Link>
    </article>
  );
}
