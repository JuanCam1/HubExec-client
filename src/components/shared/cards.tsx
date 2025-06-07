import CardComponent from "./card";

const Cards = () => {
  return (
    <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
    </div>
  );
};
export default Cards;
