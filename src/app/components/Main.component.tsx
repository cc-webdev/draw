import React, { useContext } from "react";

import Draggable from "../components/Draggable.component";
import { Context } from "../utils/context";

import styles from "../css/Home.module.css";

const Main: React.FC = () => {
  const context = useContext(Context);

  const setNull = (event: React.MouseEvent<HTMLElement>) => {
    if (event.currentTarget.id === "parent")
      context.setState({
        ...context.state,
        checked: { value: -1, type: "" },
      });
  };

  return (
    <div className={styles.main}>
      <div id="parent" style={{ height: "100%" }} onClick={(e) => setNull(e)}>
        {[...context.state.objects].map((e, index) => {
          return (
            <Draggable
              context={context}
              dimensions={{
                width: e.dimension.width,
                height: e.dimension.height,
              }}
              element={e}
              index={index}
              key={index}
              position={{ x: e.position.x, y: e.position.y }}
              styles={e.styles}
            >
              {e.content as string}
            </Draggable>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
