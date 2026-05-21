export default function Fruit({ name, emoji, price, soldOut }) {
  // return price > 5 ? (
  //   <li>
  //     {" "}
  //     {emoji} {name} र{price}{" "}
  //   </li>
  // ) : (
  //   <div></div>
  // );
  return (
    <>
      <li>
        {emoji} {name} र{price} {soldOut ? "SoldOut" : "Available"}
      </li>
    </>
  );
}
