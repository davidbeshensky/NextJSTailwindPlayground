import React from "react";

interface CardProps {
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="border-2 p-2 m-2 rounded-lg bg-blue-500 hover:bg-green-500 shadow-2xl transition duration-300 ease-in-out transform hover:scale-105 hover:opacity-75">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-center">{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

const CardContainer: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-green-500">
      <Card title="Card 1" content="This is the content of Card 1." />
      <Card title="Card 2" content="This is the content of Card 2." />
      <Card title="Card 3" content="This is the content of Card 3." />
    </div>
  );
};

export default CardContainer;

