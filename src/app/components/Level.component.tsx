import React, { useContext } from "react";
import { Button } from "react-bootstrap";

import { GrFormAdd, GrSubtract } from "react-icons/gr";

import { Context } from "../utils/context";

const Level: React.FC = () => {
  const context = useContext(Context);
  const objects = [...context.state.objects];
  const index = context.state.checked.value;

  const moveUp = () => {
    const element = objects[index];
    objects.splice(index, 1);
    objects.splice(index + 1, 0, element);
    context.setState({
      ...context.state,
      objects: objects,
      checked: { ...context.state.checked, value: index + 1 },
    });
  };
  const moveDown = () => {
    const element = objects[index];
    objects.splice(index, 1);
    objects.splice(index - 1, 0, element);
    context.setState({
      ...context.state,
      objects: objects,
      checked: { ...context.state.checked, value: index - 1 },
    });
  };

  return (
    <React.Fragment>
      <div>
        <p>level</p>
      </div>
      <div>
        <Button
          variant="outline-primary"
          size="sm"
          disabled={objects.length === 1 || index === objects.length - 1}
          onClick={moveUp}
        >
          <GrFormAdd />
        </Button>
        <Button
          variant="outline-primary"
          size="sm"
          disabled={objects.length === 1 || index === 0}
          onClick={moveDown}
        >
          <GrSubtract />
        </Button>
      </div>
    </React.Fragment>
  );
};

export default Level;
