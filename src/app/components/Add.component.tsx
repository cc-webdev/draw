import React, { useContext, useRef, useState } from "react";
import { Button } from "react-bootstrap";

import { BiImageAdd, BiText } from "react-icons/bi";
import { BsFillSquareFill } from "react-icons/bs";
import { GrAdd } from "react-icons/gr";

import Drag from "../models/Drag";
import { Context } from "../utils/context";

import styles from "../css/Home.module.css";

const Add: React.FC = () => {
  const context = useContext(Context);
  const [id, setId] = useState(1);
  const fileInput = useRef<HTMLInputElement>(null);
  const objects = [...context.state.objects];

  const addObject = (component: Drag) => {
    setId(id + 1);
    objects.push(component);
    context.setState({
      ...context.state,
      objects: objects,
    });
  };
  const setPosition = (value: string): number => {
    const parent = document.getElementById("parent");
    let parentValue = 0;
    if (parent) {
      if (value === "x") parentValue = parent.offsetWidth;
      else if (value === "y") parentValue = parent.offsetHeight;
    }
    return parentValue / 2 - 100 / 2;
  };
  const addBackground = () => {
    addObject(
      new Drag(
        id,
        "background",
        { width: "100px", height: "100px" },
        { x: setPosition("x"), y: setPosition("y") },
        {
          backgroundColor: "rgba(0,0,0,1)",
          borderStyle: "solid",
          borderWidth: "1px",
          borderColor: "rgba(0,0,0,1)",
          borderRadius: "0px",
        }
      )
    );
  };
  const addImage = (event: React.FormEvent<HTMLInputElement>) => {
    if (event.currentTarget.files && event.currentTarget.files[0]) {
      let img = event.currentTarget.files[0];
      const obj = new Drag(
        id,
        "image",
        { width: "100px", height: "100px" },
        { x: setPosition("x"), y: setPosition("y") },
        {
          backgroundColor: "rgba(0,0,0,1)",
          backgroundImage: `url(${URL.createObjectURL(img)})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderStyle: "solid",
          borderWidth: "1px",
          borderColor: "rgba(0,0,0,1)",
          borderRadius: "0px",
        }
      );
      addObject(obj);
      event.currentTarget.value = "";
    }
  };
  const addText = () => {
    addObject(
      new Drag(
        id,
        "text",
        { width: "100px", height: "100px" },
        { x: setPosition("x"), y: setPosition("y") },
        {
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          fontSize: "12px",
          fontWeight: "normal",
          fontStyle: "normal",
          color: "rgba(255,255,255,1)",
          backgroundColor: "rgba(0,0,0,1)",
          borderStyle: "solid",
          borderWidth: "1px",
          borderColor: "rgba(0,0,0,1)",
          borderRadius: "0px",
          padding: "5px",
        },
        "Text"
      )
    );
  };

  return (
    <div className={`${styles["row-styled"]}`}>
      <div className={styles["col-flex"]}>
        <GrAdd /> <p>add</p>
      </div>
      <div className={`${styles["col-flex"]} ${styles.add}`}>
        <Button variant="outline-primary" onClick={addBackground}>
          <BsFillSquareFill />
        </Button>
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
          onChange={(event) => addImage(event)}
          style={{ display: "none" }}
        />
        <Button variant="outline-primary" onClick={addText}>
          <BiText />
        </Button>
      </div>
    </div>
  );
};

export default Add;
