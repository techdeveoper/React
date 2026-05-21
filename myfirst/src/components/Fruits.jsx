import Fruit from "./Fruit";

export default function Fruits() {
  //   const fruits = ["Apple", "Mango", "Banana", "Orange", "Pineapple"];
  const fruits = [
    {
      name: "Apple",
      price: 100,
      emoji: "🍎",
      soldOut: false,
    },
    {
      name: "Mango",
      price: 150,
      emoji: "🥭",
      soldOut: false,
    },
    {
      name: "Banana",
      price: 40,
      emoji: "🍌",
      soldOut: true,
    },
    {
      name: "Orange",
      price: 200,
      emoji: "🍊",
      soldOut: false,
    },
    {
      name: "Pineapple",
      price: 50,
      emoji: "🍍",
      soldOut: false,
    },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            emoji={fruit.emoji}
            price={fruit.price}
            soldOut={fruit.soldOut}
          />
        ))}
      </ul>
    </div>
  );
}
