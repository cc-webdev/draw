import React from "react";

import Add from "../components/Add.component";
import Edit from "../components/Edit.component";
import Save from "../components/Save.component";

const Sidebar: React.FC = () => {
  return (
    <React.Fragment>
      <Add />
      <Edit />
      <Save />
    </React.Fragment>
  );
};

export default Sidebar;
