import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";

import { AiOutlineMenu } from "react-icons/ai";

import Sidebar from "./Sidebar.component";

const Menu: React.FC = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>
      <Button variant="outline-primary" onClick={handleShow} id="menu">
        <AiOutlineMenu />
      </Button>
      <Offcanvas show={show} placement="end" onHide={handleClose}>
        <Offcanvas.Header closeButton />
        <Offcanvas.Body>
          <Sidebar />
        </Offcanvas.Body>
      </Offcanvas>
    </React.Fragment>
  );
};

export default Menu;
