import React from "react";
import { DraggableData, Position, Rnd } from "react-rnd";

import Drag from "../models/Drag";
import { Ctx } from "../utils/context";

interface Props {
  context: Ctx;
  dimensions: { width: string; height: string };
  element: Drag;
  index: number;
  position: { x: number; y: number };
  styles: {};
}

const Draggable: React.FC<Props> = ({
  context,
  dimensions,
  element,
  index,
  position,
  styles,
  children,
}) => {
  const state = context.state;
  const objects = state.objects;

  const savePosition = (d: DraggableData) => {
    objects[index].position.x = d.x;
    objects[index].position.y = d.y;
    context.setState({
      ...state,
      objects: objects,
      checked: { value: index, type: element.type },
    });
  };
  const saveDimensions = (ref: HTMLElement, position: Position) => {
    objects[index].dimension.width = ref.style.width;
    objects[index].dimension.height = ref.style.height;
    objects[index].position.x = position.x;
    objects[index].position.y = position.y;
    context.setState({
      ...context.state,
      objects: objects,
      checked: { value: index, type: element.type },
    });
  };
  const setChecked = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    event.stopPropagation();
    context.setState({
      ...state,
      checked: { value: index, type: element.type },
    });
  };

  return (
    <Rnd
      bounds="#parent"
      onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => setChecked(e)}
      onDragStop={(e, d) => savePosition(d)}
      onResizeStop={(e, direction, ref, delta, position) =>
        saveDimensions(ref, position)
      }
      position={{
        x: position.x,
        y: position.y,
      }}
      size={{ width: dimensions.width, height: dimensions.height }}
      style={styles}
    >
      {children}
    </Rnd>
  );
};

export default Draggable;
