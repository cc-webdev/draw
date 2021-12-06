import React, { useContext, useState } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import { BsTypeBold, BsTypeItalic } from "react-icons/bs";
import { Context } from "../utils/context";

const TextStyle: React.FC = () => {
  const context = useContext(Context);
  const [value, setValue] = useState({ bold: "bold", italic: "italic" });
  const objects = [...context.state.objects];
  const index = context.state.checked.value;

  const setStyle = (style: string) => {
    switch (style) {
      case "weight":
        value.bold === "normal"
          ? setValue({ ...value, bold: "bold" })
          : setValue({ ...value, bold: "normal" });
        objects[index].setStyles({
          ...objects[index].styles,
          fontWeight: value.bold,
        });
        break;
      case "style":
        value.italic === "normal"
          ? setValue({ ...value, italic: "italic" })
          : setValue({ ...value, italic: "normal" });
        objects[index].setStyles({
          ...objects[index].styles,
          fontStyle: value.italic,
        });
        break;
      default:
        return;
    }
    context.setState({ ...context.state, objects: objects });
  };

  return (
    <React.Fragment>
      <div>
        <p>style</p>
      </div>
      <div>
        <ButtonGroup>
          <ToggleButton
            type="checkbox"
            checked={objects[index].styles.fontWeight === "bold"}
            variant="outline-primary"
            size="sm"
            onClick={() => setStyle("weight")}
            value={value.bold}
          >
            <BsTypeBold />
          </ToggleButton>
          <ToggleButton
            type="checkbox"
            checked={objects[index].styles.fontStyle === "italic"}
            variant="outline-primary"
            size="sm"
            onClick={() => setStyle("style")}
            value={value.italic}
          >
            <BsTypeItalic />
          </ToggleButton>
        </ButtonGroup>
      </div>
    </React.Fragment>
  );
};

export default TextStyle;
