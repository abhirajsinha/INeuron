export default function Star(props) {
  const starIcon = props.isFilled ? "starEmpty.png" : "star.png";
  return (
    <img
      src={`./images/${starIcon}`}
      className="card--favorite"
      onClick={props.handleClick}
    />
  );
}