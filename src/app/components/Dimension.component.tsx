import React, { useContext, useRef } from "react";

import CustomInput, { regex } from "./CustomInput.component";
import { Context, Ctx } from "../utils/context";

import styles from "../css/CustomInput.module.css";

const Dimension: React.FC = () => {
  const context = useContext(Context);
  const objects = [...context.state.objects];
  const index = context.state.checked.value;
  const wRef = useRef<HTMLInputElement>(null);
  const hRef = useRef<HTMLInputElement>(null);
  const parent = document.getElementById("parent");

  const setWidth = (
    event: React.KeyboardEvent,
    context: Ctx,
    index: number,
    ref: React.RefObject<HTMLInputElement>
  ) => {
    const value = ref.current?.value as string;
    let v = parseInt(value);
    if (event.key === "Enter" && value.match(regex) && parseInt(value)) {
      if (parent) {
        if (v > parent.offsetWidth) {
          v = parent.offsetWidth;
          objects[index].setPosition(0, objects[index].position.y);
        } else if (v > parent.offsetWidth - objects[index].position.x) {
          objects[index].setPosition(
            parent.offsetWidth - v,
            objects[index].position.y
          );
        }
        objects[index].setDimensions(
          v.toString(),
          objects[index].dimension.height
        );
        context.setState({ ...context.state, objects: objects });
      }
      if (ref.current !== null) ref.current.value = "";
    }
  };
  const setHeight = (
    event: React.KeyboardEvent,
    context: Ctx,
    index: number,
    ref: React.RefObject<HTMLInputElement>
  ) => {
    const value = ref.current?.value as string;
    let v = parseInt(value);
    if (event.key === "Enter" && value.match(regex) && parseInt(value)) {
      if (parent) {
        if (v > parent.offsetHeight) {
          v = parent.offsetHeight;
          objects[index].setPosition(objects[index].position.x, 0);
        } else if (v > parent?.offsetHeight - objects[index].position.y) {
          objects[index].setPosition(
            objects[index].position.x,
            parent.offsetHeight - v
          );
        }
        objects[index].setDimensions(
          objects[index].dimension.width,
          v.toString()
        );
        context.setState({ ...context.state, objects: objects });
      }
      if (ref.current !== null) ref.current.value = "";
    }
  };

  return (
    <React.Fragment>
      <div>
        <p>dimension</p>
      </div>
      <div className={styles.input}>
        <CustomInput
          name="w"
          func={(event) => setWidth(event, context, index, wRef)}
          value={objects[index].dimension.width.toString()}
          ref={wRef}
        />
        <CustomInput
          name="h"
          func={(event) => setHeight(event, context, index, hRef)}
          value={objects[index].dimension.height.toString()}
          ref={hRef}
        />
      </div>
    </React.Fragment>
  );
};

export default Dimension;
