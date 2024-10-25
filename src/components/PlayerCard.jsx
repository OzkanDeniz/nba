import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const PlayerCard = ({item}) => {
    console.log(item.name)
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default PlayerCard;
