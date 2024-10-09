import React from "react";
import { AutoSizer } from "nr1";

import EmptyState from "./components/EmptyState";
import CumulativeChart from "./components/CumulativeChart";

const Viz = ({  }) => {

  return (
    <AutoSizer>
      {({ width, height }) => {
        return (
          <CumulativeChart />
        );
      }}
    </AutoSizer>
  );
};

export default Viz;