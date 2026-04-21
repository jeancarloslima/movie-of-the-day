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
      className={`w-full max-w-[600px] cursor-pointer relative border-b border-gray-300 mb-6 px-4 ${index === 4 ? "pt-[calc(50vw-20px)] sm:pt-[70%] sm:h-full sm:order-[-1] sm:row-span-2" : ""}`}
    >
      <Link className="w-full block pb-6 md:pb-8" to={`/review/${id}`}>
        <h2 className={`font-semibold ${index === 4 ? "text-2xl w-full" : "text-lg w-7/10"}`}>{`${id}: ${title}`}</h2>
        <p className={`text-justify md:py-2 ${index === 4 ? "w-full py-1" : "w-7/10"}`}>{summary}</p>
        <span className={`text-sm text-zinc-600 ${index === 4 ? "w-full" : "w-7/10"}`}>{`${date} * ${author}`}</span>
        <img
          className={`absolute right-[16px] top-0 rounded-lg object-cover 
  ${
    index === 4
      ? "left-0 right-auto top-[-32px] rounded-none w-screen h-[50vw] sm:top-0 sm:rounded-lg sm:h-[50%]"
      : "w-2/10 h-[72px] sm:h-[80px] md:w-[160px] md:h-[100px]"
  }`}
          src={imageURL}
          alt={`${title} image`}
        />
      </Link>
    </article>
  );
}
