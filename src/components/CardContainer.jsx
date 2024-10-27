import { Container, Form, Row } from "react-bootstrap";
import { data } from "../helper/data";
import PlayerCard from "./PlayerCard";
import { useState } from "react";

const CardContainer = () => {
  const [search, setsearch] = useState("");

  const handleChange = (e) => {
    setsearch(e.target.value);
    
  };

const filteredData = data.filter(legends=> legends.name.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase()))
console.log(filteredData)


  return (
    <>
      <Form.Control
        type="search"
        onChange={(e) => handleChange(e)}
        placeholder="Search Player..."
      />
      <br />

      <Container>
        <Row>
          {data.map((legends) => (
            <PlayerCard key={legends.id} legends={legends} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default CardContainer;
