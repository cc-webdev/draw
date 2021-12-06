import React, { useContext, useRef } from "react";
import styled from "@emotion/styled";
import { Button } from "react-bootstrap";

import { BiImageAdd } from "react-icons/bi";

import { Context } from "../utils/context";

import styles from "../css/Home.module.css";

const EditImage: React.FC = () => {
  const context = useContext(Context);
  const fileInput = useRef<HTMLInputElement>(null);
  const objects = [...context.state.objects];
  const index = context.state.checked.value;

  const changeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.files && event.currentTarget.files[0]) {
      let img = event.currentTarget.files[0];
      objects[index].setStyles({
        ...objects[index].styles,
        backgroundImage: `url(${URL.createObjectURL(img)})`,
      });
      context.setState({ ...context.state, objects: objects });
    }
  };

  const PreviewBox = styled("img")({
    marginRight: "10px",
    backgroundImage: objects[index].styles.backgroundImage,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
    width: "64px",
    height: "40px",
  });

  return (
    <React.Fragment>
      <p>image</p>
      <div className={styles.imageBox}>
        <PreviewBox />
        <Button
          variant="outline-primary"
          onClick={(event) => {
            event.preventDefault();
            fileInput.current?.click();
          }}
        >
          <BiImageAdd />
        </Button>
        <input
          ref={fileInput}
          type="file"
          accept="image/*"
          onChange={(event) => changeImage(event)}
          style={{ display: "none" }}
        />
      </div>
    </React.Fragment>
  );
};

export default EditImage;
