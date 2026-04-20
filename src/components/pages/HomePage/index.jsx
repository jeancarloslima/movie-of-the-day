import ReviewCard from "../../assets/ReviewCard";

export default function HomePage({ reviews }) {
  const filteredReviews = reviews.slice(-6);

  return (
    <div className="mx-auto w-full max-w-[632px]">
      <div></div>
      <div>
        <ul className="flex flex-col-reverse justify-center items-center px-4 pt-8 pb-2">
          {filteredReviews.map((item) => (
            <ReviewCard
              key={item.id}
              id={item.id}
              title={item.title}
              summary={item.summary}
              date={item.date}
              author={item.author}
              imageURL={item.imageURL}
            />
          ))}
        </ul>
        <button className="cursor-pointer rounded-lg bg-gray-200 py-2 px-4 mb-8">See all &#62;</button>
      </div>
    </div>
  );
}
