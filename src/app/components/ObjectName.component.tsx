import React, { useContext } from "react";
import { Button } from "react-bootstrap";

import { MdDelete, MdCenterFocusStrong } from "react-icons/md";

import { Context } from "../utils/context";

const ObjectName: React.FC = () => {
  const context = useContext(Context);
  const objects = [...context.state.objects];
  const index = context.state.checked.value;

  const deleteItem = () => {
    objects.splice(index, 1);
    context.setState({
      ...context.state,
      objects: objects,
      checked: { ...context.state.checked, type: "" },
    });
  };
  const center = () => {
    const parent = document.getElementById("parent");
    if (parent) {
      objects[index].setPosition(
        parent.offsetWidth / 2 - parseInt(objects[index].dimension.width) / 2,
        parent.offsetHeight / 2 - parseInt(objects[index].dimension.height) / 2
      );
      context.setState({ ...context.state, objects: objects });
    }
    return;
  };

  return (
    <React.Fragment>
      <div>
        <p>{`Object${objects[index].id}`}</p>
      </div>
      <div>
        <Button variant="outline-primary" size="sm" onClick={center}>
          <MdCenterFocusStrong />
        </Button>
        <Button variant="outline-primary" size="sm" onClick={deleteItem}>
          <MdDelete />
        </Button>
      </div>
    </React.Fragment>
  );
};

export default ObjectName;
