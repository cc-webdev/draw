import React, { useContext } from "react";
import { Button, ButtonGroup } from "react-bootstrap";

import {
  AiOutlineAlignLeft,
  AiOutlineAlignCenter,
  AiOutlineAlignRight,
} from "react-icons/ai";
import { BsAlignBottom, BsAlignCenter, BsAlignTop } from "react-icons/bs";

import CustomMenu from "./CustomMenu.component";
import { Context } from "../utils/context";

import styles from "../css/Home.module.css";

const TextAlignment: React.FC = () => {
  const context = useContext(Context);
  const objects = [...context.state.objects];
  const index = context.state.checked.value;
  const vertical = [<BsAlignTop />, <BsAlignCenter />, <BsAlignBottom />];

  const setStyle = (style: string, value: string) => {
    switch (style) {
      case "alignment":
        objects[index].setStyles({
          ...objects[index].styles,
          justifyContent: value,
        });
        break;
      case "vertical":
        objects[index].setStyles({
          ...objects[index].styles,
          alignItems: value,
        });
        break;
      default:
        return;
    }
    context.setState({ ...context.state, objects: objects });
  };
  const getAlignment = (value: string) => {
    switch (value) {
      case "start":
        return vertical[0];
      case "center":
        return vertical[1];
      case "end":
        return vertical[2];
      default:
        return;
    }
  };
  const setAlignment = (el: React.ReactNode) => {
    switch (el) {
      case vertical[0]:
        return setStyle("vertical", "start");
      case vertical[1]:
        return setStyle("vertical", "center");
      case vertical[2]:
        return setStyle("vertical", "end");
      default:
        return;
    }
  };

  return (
    <React.Fragment>
      <div>
        <p>align</p>
      </div>
      <div className={styles["col-flex"]}>
        <ButtonGroup>
          <CustomMenu
            image={getAlignment(objects[index].styles.alignItems as string)}
            options={vertical}
            func={(el) => setAlignment(el)}
          />
          <Button
            variant="outline-primary"
            size="sm"
            onClick={() => setStyle("alignment", "start")}
            active={objects[index].styles.justifyContent === "start"}
          >
            <AiOutlineAlignLeft />
          </Button>
          <Button
            active={objects[index].styles.justifyContent === "center"}
            variant="outline-primary"
            size="sm"
            onClick={() => setStyle("alignment", "center")}
          >
            <AiOutlineAlignCenter />
          </Button>
          <Button
            active={objects[index].styles.justifyContent === "end"}
            variant="outline-primary"
            size="sm"
            onClick={() => setStyle("alignment", "end")}
          >
            <AiOutlineAlignRight />
          </Button>
        </ButtonGroup>
      </div>
    </React.Fragment>
  );
};

export default TextAlignment;
