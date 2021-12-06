import React, { useContext } from "react";

import { BiBorderRadius } from "react-icons/bi";
import {
  CgBorderStyleDashed,
  CgBorderStyleDotted,
  CgBorderStyleSolid,
} from "react-icons/cg";
import { FaGripLines } from "react-icons/fa";
import { MdLineWeight, MdLineStyle } from "react-icons/md";

import CustomMenu from "./CustomMenu.component";
import { Context } from "../utils/context";

const BorderStyles: React.FC = () => {
  const context = useContext(Context);
  const objects = [...context.state.objects];
  const index = context.state.checked.value;
  const STYLE = [
    <CgBorderStyleSolid />,
    <CgBorderStyleDashed />,
    <CgBorderStyleDotted />,
    <FaGripLines />,
  ];
  const RADIUS = ["0", "5", "10", "20", "30", "40", "50"];
  const WIDTH = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const getStyleValue = (value: React.ReactNode) => {
    switch (value) {
      case STYLE[0]:
        return "solid";
      case STYLE[1]:
        return "dashed";
      case STYLE[2]:
        return "dotted";
      case STYLE[3]:
        return "double";
      default:
        return;
    }
  };
  const setStyle = (type: string, value: string) => {
    const styles = objects[index].styles;
    switch (type) {
      case "width":
        objects[index].setStyles({ ...styles, borderWidth: value + "px" });
        break;
      case "style":
        objects[index].setStyles({ ...styles, borderStyle: value });
        break;
      case "radius":
        objects[index].setStyles({ ...styles, borderRadius: value + "%" });
        break;
    }
    context.setState({ ...context.state, objects: objects });
  };

  return (
    <React.Fragment>
      <CustomMenu
        image={<MdLineWeight />}
        options={WIDTH}
        func={(el) => setStyle("width", el as string)}
      ></CustomMenu>
      <CustomMenu
        image={<MdLineStyle />}
        options={STYLE}
        func={(el) => setStyle("style", getStyleValue(el) as string)}
      ></CustomMenu>
      <CustomMenu
        image={<BiBorderRadius />}
        options={RADIUS}
        func={(el) => setStyle("radius", el as string)}
      ></CustomMenu>
    </React.Fragment>
  );
};

export default BorderStyles;
