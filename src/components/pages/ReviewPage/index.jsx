export default function ReviewPage() {
  return (
    <div>
      <div>
        <h2>{`${id}: ${title}`}</h2>
        <p>{summary}</p>
        <span>{`${date} * ${author}`}</span>
      </div>
      <div>
        <h3>{title}</h3>
        <img src={coverURL} alt={`${title} cover`} />
        <h4>Star Rating: {rating} / 5</h4>
        <h4>Duration: {duration}</h4>
        <h4>Director: {director}</h4>
        <h4>Sinopsys: {synopsys}</h4>
        <h3>{subtitle}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
