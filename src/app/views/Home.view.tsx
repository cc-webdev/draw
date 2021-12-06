import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Main from "../components/Main.component";
import Menu from "../components/Menu.component";
import Sidebar from "../components/Sidebar.component";

import styles from "../css/Home.module.css";

const Home: React.FC = () => {
  return (
    <Container fluid="lg" className={styles.container}>
      <Menu />
      <Row>
        <Col md={7} className={styles.child}>
          <Main />
        </Col>
        <Col md={5} className={styles.child} id="sidebar">
          <Sidebar />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
