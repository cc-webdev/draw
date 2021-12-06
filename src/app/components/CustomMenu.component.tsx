import React from "react";
import { Dropdown } from "react-bootstrap";

interface Props {
  image: string | React.ReactNode;
  options: (string | React.ReactNode)[];
  func: (el: string | React.ReactNode) => void;
}

const CustomMenu: React.FC<Props> = ({ options, image, func }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="outline-primary" size="sm">
        {image}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {options.map((el, index) => {
          return (
            <Dropdown.Item key={index} onClick={() => func(el)}>
              {el}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CustomMenu;
