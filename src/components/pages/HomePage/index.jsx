import { useNavigate } from "react-router";
import ReviewCard from "../../assets/ReviewCard";

export default function HomePage({ reviews, setTelaAtiva }) {
  const navigate = useNavigate();
  const filteredReviews = reviews.slice(-11);

  const openArchive = () => {
    navigate("/archive");
    setTelaAtiva("Archive");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="mx-auto w-full max-w-[770px]">
      <div>
        <ul className="flex flex-col justify-center items-center sm:hidden lg:h-[600px] pb-8 lg:pt-8 lg:grid lg:grid-cols-[4fr_2fr] lg:grid-rows-2 lg:gap-4 lg:pb-6 lg:px-4 lg:border-b border-gray-300">
          {filteredReviews.slice(6).reverse().map((item, index) => (
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
        <ul className="hidden lg:hidden lg:h-[600px] pb-8 sm:pt-8 sm:grid sm:grid-cols-[4fr_2fr] sm:grid-rows-2 sm:gap-4 sm:pb-6 sm:px-4 sm:border-b border-gray-300">
          {filteredReviews.slice(8).reverse().map((item, index) => (
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
      <div className="w-full max-w-[770px] mx-auto">
        <h2 className="text-xl font-semibold pt-4 pl-4 md:pl-0">Recent Posts</h2>
        <ul className="flex flex-col justify-center items-center pt-8 pb-2 sm:hidden lg:flex">
          {filteredReviews.slice(0,6).reverse().map((item) => (
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
        <ul className="hidden sm:flex lg:hidden sm:flex-col sm:justify-center sm:items-center sm:pt-8 sm:pb-2">
          {filteredReviews.slice(2,8).reverse().map((item) => (
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
          className="cursor-pointer rounded-lg bg-gray-200 py-2 px-4 mb-8 ml-4 md:ml-0 hover:bg-blue-500 hover:text-white"
        >
          See all &#62;
        </button>
      </div>
    </div>
  );
}
