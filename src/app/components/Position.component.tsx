import React, { useContext, useRef } from "react";

import CustomInput, { regex } from "./CustomInput.component";
import { Context, Ctx } from "../utils/context";

import styles from "../css/CustomInput.module.css";

const Position: React.FC = () => {
  const context = useContext(Context);
  const objects = [...context.state.objects];
  const index = context.state.checked.value;
  const xRef = useRef<HTMLInputElement>(null);
  const yRef = useRef<HTMLInputElement>(null);
  const parent = document.getElementById("parent");

  const setX = (
    event: React.KeyboardEvent,
    context: Ctx,
    xRef: React.RefObject<HTMLInputElement>
  ) => {
    if (
      event.key === "Enter" &&
      xRef.current?.value.match(regex) &&
      xRef.current?.value &&
      xRef.current?.value !== ""
    ) {
      const value = xRef.current.value;
      let n = parseInt(value);
      if (parent) {
        if (
          n > parent.offsetWidth ||
          n + parseInt(objects[index].dimension.width) > parent.offsetWidth
        ) {
          n = parent.offsetWidth - parseInt(objects[index].dimension.width);
        }
        objects[index].setPosition(Math.round(n), objects[index].position.y);
        context.setState({ ...context.state, objects: objects });
      }
      if (xRef.current !== null) xRef.current.value = "";
    }
  };
  const setY = (
    event: React.KeyboardEvent,
    context: Ctx,
    yRef: React.RefObject<HTMLInputElement>
  ) => {
    if (
      event.key === "Enter" &&
      yRef.current?.value.match(regex) &&
      yRef.current?.value &&
      yRef.current?.value !== ""
    ) {
      const value = yRef.current.value;
      let n = parseInt(value);
      if (parent) {
        if (
          n > parent.offsetWidth ||
          n + parseInt(objects[index].dimension.height) > parent.offsetHeight
        ) {
          n = parent.offsetHeight - parseInt(objects[index].dimension.height);
        }
        objects[index].setPosition(objects[index].position.x, Math.round(n));
        context.setState({ ...context.state, objects: objects });
      }
      if (yRef.current !== null) yRef.current.value = "";
    }
  };

  return (
    <React.Fragment>
      <div>
        <p>position</p>
      </div>
      <div className={styles.input}>
        <CustomInput
          name="x"
          func={(event) => setX(event, context, xRef)}
          value={objects[index].position.x.toString()}
          ref={xRef}
        />
        <CustomInput
          name="y"
          func={(event) => setY(event, context, yRef)}
          value={objects[index].position.y.toString()}
          ref={yRef}
        />
      </div>
    </React.Fragment>
  );
};

export default Position;
