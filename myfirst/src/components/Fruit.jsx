export default function Fruit({ name, emoji, price }) {
  return (
    <li>
      {emoji} {name} र{price}
    </li>
  );
}
