import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
// import { data } from "../helpers/data";

const ContainerCard = () => {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    console.log(e.target)
    setSearch(e.target.value)
    console.log(search)
  };
  // const handleChange = (e) => {
  //   console.log(e.target.value);
  //   setSearch(e.target.value);
  // };
  //   console.log(search);

  // const filteredData = data.filter((item) =>
  //   item.name.toLowerCase().includes(search.trim().toLowerCase())
  // );

  // console.log("filter", filteredData);

  return (
    <>
      <Form.Control
        type="search"
        placeholder="Search Player..."
        onChange={handleChange}
      />
      <Container
        className="p-3 rounded-4 card-container my-3"
        // onChange={handleChange}
      />
      <Row xs={2} md={4} lg={6} className="justify-content-center my-g-3">
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
        <Col>3 of 3</Col>
      </Row>
      <Container />
    </>
  );
};

export default ContainerCard;
