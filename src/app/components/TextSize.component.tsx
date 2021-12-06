import React, { useContext } from "react";

import CustomMenu from "./CustomMenu.component";
import { Context } from "../utils/context";

const TextSize: React.FC = () => {
  const context = useContext(Context);
  const objects = [...context.state.objects];
  const index = context.state.checked.value;
  const SIZE = ["12", "14", "16", "18", "20", "22", "24", "26", "28", "30"];

  const setStyle = (value: string) => {
    const styles = objects[index].styles;
    objects[index].setStyles({ ...styles, fontSize: value + "px" });
    context.setState({ ...context.state, objects: objects });
  };

  return (
    <React.Fragment>
      <div>
        <p>font size</p>
      </div>
      <CustomMenu
        image={objects[index].styles.fontSize as string}
        options={SIZE}
        func={(el) => setStyle(el as string)}
      />
    </React.Fragment>
  );
};

export default TextSize;
