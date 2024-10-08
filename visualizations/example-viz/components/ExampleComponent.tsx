import React from "react";
// import { useProps } from "../context/VizPropsProvider";
// import { useNerdGraphQuery } from "../hooks/useNerdGraphQuery";
import { NrqlQuery, LineChart } from "nr1";

const ExampleComponent = () => {

  return (
        <>
        <h2>Standard</h2>
        <NrqlQuery
          accountIds={[3934073]}
          query="SELECT count(*) as value FROM Transaction SINCE 1 DAY AGO TIMESERIES AUTO facet appName limit 3"
        >
          {({ data }) => {
            return <LineChart fullWidth data={data} />;
          }}
        </NrqlQuery>

        <h2>Cumulative</h2>
        <NrqlQuery
          accountIds={[3934073]}
          query="SELECT count(*) as value FROM Transaction SINCE 1 DAY AGO TIMESERIES AUTO facet appName limit 3"
        >
          {({ data }) => {
            if (data) {
              // Cumulative sum
              data.forEach((series)=>{
                let cumulative = 0;
                series.data.forEach((d, i) => {
                  cumulative += d.y;
                  d.y = cumulative;
                })
              });
            }
            return <LineChart fullWidth data={data} />;
          }}
        </NrqlQuery>
        </>
  );
};

export default ExampleComponent;