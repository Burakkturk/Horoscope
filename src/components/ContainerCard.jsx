import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { PlayerCard } from "react";
import { data } from "../helpers/data";

const ContainerCard = () => {
  const [search, setSearch] = useState("");
  console.log(data);
  const handleChange = (e) => {
    console.log(e.target);
    setSearch(e.target.value);
    console.log(search);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.trim().toLowerCase())
  );

  console.log("filter", filteredData);

  return (
    <>
      <Form.Control
        type="search"
        value={search}
        placeholder="Search Player..."
        onChange={handleChange}
      />
      <Container
        className="p-3 rounded-4 card-container my-3"
        // onChange={handleChange}
      />
      <Row xs={2} sm={2} md={3} lg={4} className="justify-content-center g-3">
        <Col>1 of 2</Col>
        {filteredData.map((player, i) => (
          // <PlayerCard
          //   key={i}
          //   player={player}
          //   img={player.img}
          //   name={player.name}
          //   statistics={player.statistics}
          //   {...player}
          <PlayerCard key={i} {...player} />
        ))}
      </Row>
      <Container />
    </>
  );
};

export default ContainerCard;
