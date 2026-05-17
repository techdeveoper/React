import Fruit from "./Fruit";

export default function Fruits() {
  //   const fruits = ["Apple", "Mango", "Banana", "Orange", "Pineapple"];
  const fruits = [
    {
      name: "Apple",
      price: 100,
      emoji: "🍎",
    },
    {
      name: "Mango",
      price: 150,
      emoji: "🥭",
    },
    {
      name: "Banana",
      price: 40,
      emoji: "🍌",
    },
    {
      name: "Orange",
      price: 200,
      emoji: "🍊",
    },
    {
      name: "Pineapple",
      price: 50,
      emoji: "🍍",
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
          />
        ))}
      </ul>
    </div>
  );
}
