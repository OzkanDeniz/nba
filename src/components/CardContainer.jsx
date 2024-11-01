import { Container, Form, Row } from "react-bootstrap";
import { data } from "../helper/data";
import PlayerCard from "./PlayerCard";
import { useState } from "react";

const CardContainer = () => {
  const [search, setsearch] = useState("");

  const handleChange = (e) => {
    setsearch(e.target.value);
  };

  return (
    <>
      <Form.Control
        type="search"
        onChange={(e) => handleChange(e)}
        placeholder="Search Player..."
        className="input w-50 m-auto"
      />
      <br />

      <Container>
        <Row className="gy-3">
          {data
            .filter((legends) =>
              legends.name
                .toLocaleLowerCase()
                .includes(search.trim().toLocaleLowerCase())
            )
            .map((legends) => (
              <PlayerCard key={legends.id} legends={legends} />
            ))}
        </Row>
      </Container>
    </>
  );
};

export default CardContainer;
