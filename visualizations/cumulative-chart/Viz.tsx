import React from "react";
import { AutoSizer } from "nr1";

import EmptyState from "./components/EmptyState";
import ExampleComponent from "./components/ExampleComponent";

const Viz = ({  }) => {

  return (
    <AutoSizer>
      {({ width, height }) => {
        return (
          <ExampleComponent />
        );
      }}
    </AutoSizer>
  );
};

export default Viz;