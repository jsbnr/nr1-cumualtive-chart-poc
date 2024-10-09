import React from "react";
import { useProps } from "../context/VizPropsProvider";
import { NrqlQuery, LineChart } from "nr1";

const CumulativeChart = () => {
  const vizProps = useProps();
  const { accountId, query } = vizProps;

  return (
        <>
        <NrqlQuery
          accountIds={[accountId]}
          query={query}
        >
          {({ data }) => {
            if (data) {
              // Cumulative sum
              data.forEach((series)=>{
                if(series.cumulativeApplied) return;
                let cumulative = 0;
                series.data.forEach((d, i) => {
                  cumulative += d.y;
                  d.y = cumulative;
                });
                series.cumulativeApplied=true;
              });
            } 
            return <LineChart fullWidth fullHeight data={data} />;
            
          }}
        </NrqlQuery>
        
        </>
  );
};

export default CumulativeChart;