import { useState } from "react";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const PlayerCard = ({ legends }) => {
  const [show, setshow] = useState(true);

  return (
    <Col xs={10} sm={8} md={6} lg={4} xl={3}>
      <Card>
        {show ? (
          <Card.Img onClick={()=>setshow(false)} variant="top" src={legends.img} />
        ) : (
          <Card.Body onClick={()=>setshow(true)}>
            <ul>
              {legends.statistics.map((item) => (
                <li className="list-unstyled h5 text-start">🏀{item}</li>
              ))}
            </ul>
          </Card.Body>
        )}

        <Card.Footer>{legends.name}</Card.Footer>
      </Card>
    </Col>
  );
};

export default PlayerCard;
