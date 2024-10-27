import Card from "react-bootstrap/Card";

const PlayerCard = ({ legends }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={legends.img} />
      <Card.Body>
        <Card.Title>{legends.name}</Card.Title>
        <ul>
          {legends.statistics.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
};

export default PlayerCard;
