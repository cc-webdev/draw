interface Drag {
  id: number;
  type: string;
  dimension: { width: string; height: string };
  position: { x: number; y: number };
  styles: {
    display?: string;
    justifyContent?: string;
    alignItems?: string;
    fontSize?: string;
    fontWeight?: string;
    fontStyle?: string;
    color?: string;
    backgroundColor?: string;
    backgroundImage?: string;
    backgroundRepeat?: string;
    backgroundSize?: string;
    borderStyle?: string;
    borderWidth?: string;
    borderColor?: string;
    borderRadius?: string;
    padding?: string;
  };
  content?: string;
}

class Drag implements Drag {
  constructor(
    id: number,
    type: string,
    dimension: { width: string; height: string },
    position: { x: number; y: number },
    styles: {
      display?: string;
      justifyContent?: string;
      alignItems?: string;
      fontSize?: string;
      fontWeight?: string;
      fontStyle?: string;
      color?: string;
      backgroundColor?: string;
      backgroundImage?: string;
      backgroundRepeat?: string;
      backgroundSize?: string;
      borderStyle?: string;
      borderWidth?: string;
      borderColor?: string;
      borderRadius?: string;
      padding?: string;
    },
    content?: string
  ) {
    this.id = id;
    this.type = type;
    this.dimension = dimension;
    this.position = position;
    this.styles = styles;
    this.content = content;
  }

  setDimensions(width: string, height: string) {
    this.dimension.width = width;
    this.dimension.height = height;
  }

  setPosition(x: number, y: number) {
    this.position.x = x;
    this.position.y = y;
  }

  setStyles(styles: {
    display?: string;
    justifyContent?: string;
    alignItems?: string;
    fontSize?: string;
    fontWeight?: string;
    fontStyle?: string;
    color?: string;
    backgroundColor?: string;
    backgroundImage?: string;
    backgroundRepeat?: string;
    backgroundSize?: string;
    borderStyle?: string;
    borderWidth?: string;
    borderColor?: string;
    borderRadius?: string;
    padding?: string;
  }) {
    this.styles = styles;
  }

  setContent(value: string) {
    this.content = value;
  }
}

export default Drag;
