import React, { useContext, useRef } from "react";

import { Context } from "../utils/context";

import styles from "../css/CustomInput.module.css";

const TextValue: React.FC = () => {
  const context = useContext(Context);
  const objects = [...context.state.objects];
  const index = context.state.checked.value;
  const txtRef = useRef<HTMLInputElement>(null);

  const setText = (event: React.KeyboardEvent) => {
    const value = txtRef.current?.value as string;
    if (event.key === "Enter" && value && value.trim() !== "") {
      objects[index].setContent(value);
      context.setState({ ...context.state, objects: objects });
      if (txtRef.current !== null) txtRef.current.value = "";
    }
  };
  const getString = () => {
    let v = "";
    objects[index].content ? (v = objects[index].content as string) : (v = "");
    v.length > 5 ? (v = v.slice(0, 5) + "...") : (v = v.slice(0, 5));
    return v;
  };

  return (
    <React.Fragment>
      <div>
        <p>text</p>
      </div>
      <div className={styles["input-flex"]}>
        <p>{getString()}</p>
        <input
          type="text"
          onKeyPress={(event) => setText(event)}
          ref={txtRef}
          placeholder="new value"
        />
      </div>
    </React.Fragment>
  );
};

export default TextValue;
