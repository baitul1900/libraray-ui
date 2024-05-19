import Card from "./Card";
import "./MainBody.css";

const MainBody = () => {
  const cards = [
    { id: 1, text: "I'm firest card" },
    { id: 2, text: "I'm firest card" },
    { id: 3, text: "I'm firest card" },
    { id: 4, text: "I'm firest card" },
  ];

  return (
    <main>
      {cards.map((card) => (
        <Card key={card.id} data={card} />
      ))}
    </main>
  );
};

export default MainBody;
