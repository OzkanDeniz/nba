import { Container, Row } from "react-bootstrap";
import { data } from "../helper/data";
import PlayerCard from "./PlayerCard";

const CardContainer = () => {
  return (
    <Container>
      <Row>
        {data.map((legends) => (
          <PlayerCard legends={legends} />
        ))}
      </Row>
    </Container>
  );
};

export default CardContainer;
