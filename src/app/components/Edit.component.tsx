import React, { useContext } from "react";
import styled from "@emotion/styled";

import { GrEdit } from "react-icons/gr";

import BorderStyles from "../components/BorderStyles.component";
import ColorPicker from "../components/ColorPicker.component";
import Dimension from "../components/Dimension.component";
import EditImage from "../components/EditImage.component";
import Level from "../components/Level.component";
import ObjectName from "../components/ObjectName.component";
import Position from "../components/Position.component";
import TextAlignment from "../components/TextAlignment.component";
import TextSize from "../components/TextSize.component";
import TextStyle from "../components/TextStyle.component";
import TextValue from "../components/TextValue.component";
import { Context } from "../utils/context";

import styles from "../css/Home.module.css";

const Edit: React.FC = () => {
  const context = useContext(Context);
  const type = context.state.checked.type;

  const TEXT = [
    <TextValue />,
    <TextSize />,
    <TextAlignment />,
    <TextStyle />,
    <ColorPicker type="text" title="color" />,
  ];

  const CssDiv = styled("div")({
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  });

  return (
    <div className={`${styles["row-styled"]} ${styles.options}`}>
      {type === "" ? (
        <CssDiv>Select an object</CssDiv>
      ) : (
        <React.Fragment>
          <div className={styles["col-flex"]}>
            <GrEdit /> <p>edit</p>
          </div>
          <div className={styles["options-flex"]}>
            <ObjectName />
          </div>
          <div className={styles["options-flex"]}>
            <Level />
          </div>
          <div className={styles["options-flex"]}>
            <Position />
          </div>
          <div className={styles["options-flex"]}>
            <Dimension />
          </div>
          {type === "image" && (
            <div className={styles["options-flex"]}>
              <EditImage />
            </div>
          )}
          {type === "text" &&
            TEXT.map((el, index) => {
              return (
                <div key={index} className={styles["options-flex"]}>
                  {el}
                </div>
              );
            })}
          <div className={styles["options-flex"]}>
            <ColorPicker title="background" type="background" />
          </div>
          <div className={styles["options-flex"]}>
            <ColorPicker title="border" type="border" />
          </div>
          <div className={styles.border}>
            <BorderStyles />
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default Edit;
