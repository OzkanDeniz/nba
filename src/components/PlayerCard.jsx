import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const PlayerCard = ({ legends }) => {
  return (
    <Col xs={10} sm={8} md={6} lg={4} xl={3} >
      <Card>
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
    </Col>
  );
};

export default PlayerCard;
