import React, { createContext, useState } from "react";

import Drag from "../models/Drag";

interface State {
  objects: Drag[];
  checked: { value: number; type: string };
  color: string;
}

export interface Ctx {
  state: State;
  setState: (value: State) => void;
}

const DEFAULT_STATE: Ctx = {
  state: { objects: [], checked: { value: -1, type: "" }, color: "#000000" },
  setState: () => {},
};

export const Context = createContext<Ctx>(DEFAULT_STATE);

const ContextProvider: React.FC = (props) => {
  const [state, setState] = useState<State>({
    objects: [],
    checked: { value: -1, type: "" },
    color: "rgba(0,0,0,1)",
  });

  const ctx: Ctx = {
    state: {
      objects: state.objects,
      checked: state.checked,
      color: state.color,
    },
    setState: setState,
  };

  return <Context.Provider value={ctx}>{props.children}</Context.Provider>;
};

export default ContextProvider;
