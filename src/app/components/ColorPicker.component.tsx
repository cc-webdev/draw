import React, { useContext, useState } from "react";
import { RgbaColor, RgbaColorPicker } from "react-colorful";
import rgb2hex from "rgb2hex";
import { Button } from "react-bootstrap";

import { BiFontColor, BiColorFill, BiEditAlt, BiCopy } from "react-icons/bi";
import { IoMdColorFilter } from "react-icons/io";

import { Context } from "../utils/context";

import styles from "../css/ColorPicker.module.css";

interface Props {
  type: string;
  title: string;
}

const ColorPicker: React.FC<Props> = ({ title, type }) => {
  const context = useContext(Context);
  const [display, setDisplay] = useState(false);
  const objects = [...context.state.objects];
  const index = context.state.checked.value;
  const objStyle = objects[index].styles;

  const openColorPicker = () => {
    setDisplay(!display);
  };
  const saveColor = (color: string) => {
    context.setState({ ...context.state, color: color });
  };
  const saveStyle = (value: string) => {
    const style = setStyle(value);
    if (style) {
      objects[index].setStyles(style);
      context.setState({ ...context.state, objects: objects });
    }
  };
  const getType = () => {
    switch (type) {
      case "border":
        return objStyle.borderColor;
      case "text":
        return objStyle.color;
      case "background":
        return objStyle.backgroundColor;
      default:
        return;
    }
  };
  const setStyle = (value: string) => {
    switch (type) {
      case "background":
        return { ...objStyle, backgroundColor: value };
      case "border":
        return { ...objStyle, borderColor: value };
      case "text":
        return { ...objStyle, color: value };
      default:
        return;
    }
  };
  const getIcon = () => {
    switch (type) {
      case "background":
        return (
          <BiColorFill
            style={{
              color: objStyle.backgroundColor,
              strokeWidth: 0.5,
            }}
          />
        );
      case "border":
        return (
          <BiEditAlt
            style={{
              color: objStyle.borderColor,
              strokeWidth: 0.5,
            }}
          />
        );
      case "text":
        return (
          <BiFontColor style={{ color: objStyle.color, strokeWidth: 0.5 }} />
        );
      default:
        return;
    }
  };
  const toRgbaColor = () => {
    let value = getType();
    let color: RgbaColor = {
      r: 0,
      g: 0,
      b: 0,
      a: 1,
    };
    if (value) {
      const v = value.replace(/[^\d/.,]/g, "").split(",");
      color.r = Number(v[0]);
      color.g = Number(v[1]);
      color.b = Number(v[2]);
      color.a = Number(v[3]);
    }
    return color;
  };

  return (
    <React.Fragment>
      <div>
        <p>{title}</p>
      </div>
      <div>
        <Button
          variant="outline-primary"
          onClick={() => saveStyle(context.state.color)}
        >
          <IoMdColorFilter />
        </Button>
        <Button variant="outline-primary" onClick={openColorPicker}>
          {getIcon()}
        </Button>
      </div>
      {display && (
        <div className={styles.popover}>
          <RgbaColorPicker
            color={toRgbaColor()}
            onChange={(value) =>
              saveStyle(`rgba(${value.r},${value.g},${value.b},${value.a})`)
            }
          />
          <div className={styles.color}>
            <div>
              {objStyle && rgb2hex(getType() as string).hex} {" %"}
              {objStyle && rgb2hex(getType() as string).alpha}
            </div>
            <Button
              variant="outline-primary"
              size="sm"
              onClick={() => saveColor(getType() as string)}
            >
              <BiCopy />
            </Button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default ColorPicker;
