import { Container, Form, Row } from "react-bootstrap";
import { data } from "../helper/data";
import PlayerCard from "./PlayerCard";

const CardContainer = () => {
  return (
    <>
      <Form.Control type="search" placeholder="Search Player..." /><br/>
      <Container>
        <Row>
          {data.map((legends) => (
            <PlayerCard legends={legends} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default CardContainer;
