import ReviewCard from "../../assets/ReviewCard";

export default function ArchivePage({ reviews }) {
  return (
    <div className="">
      <ul className="flex flex-col-reverse justify-center items-center px-4 py-8">
        {reviews.map((item) => (
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
    </div>
  );
}
