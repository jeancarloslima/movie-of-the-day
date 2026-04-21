import { useNavigate } from "react-router";
import ReviewCard from "../../assets/ReviewCard";

export default function HomePage({ reviews, setTelaAtiva }) {
  const navigate = useNavigate();
  const filteredReviews = reviews.slice(-11);
  const firstPart = filteredReviews.slice(0, 6);
  const secondPart = filteredReviews.slice(6);

  const openArchive = () => {
    navigate("/archive");
    setTelaAtiva("Archive");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="mx-auto w-full max-w-[632px]">
      <div>
        <ul className="flex flex-col-reverse justify-center items-center pt-8 pb-2 sm:grid sm:grid-cols-[3fr_2fr] sm:grid-rows-2 ">
          {secondPart.map((item, index) => (
            <ReviewCard
              index={index}
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
      <div>
        <h2 className="text-xl font-semibold pl-4 pt-4">Recent Posts</h2>
        <ul className="flex flex-col-reverse justify-center items-center pt-8 pb-2">
          {firstPart.map((item) => (
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
        <button
          onClick={openArchive}
          className="cursor-pointer rounded-lg bg-gray-200 py-2 px-4 mb-8 ml-4 hover:bg-blue-500 hover:text-white"
        >
          See all &#62;
        </button>
      </div>
    </div>
  );
}
