import React from "react";
import digital_marketing_stats from "../data";
import { MarketingStatsCard } from "./MarketingStatsCard";

export const MarketingStatsContainer = () => {
  return (
    <div>
      {digital_marketing_stats.map((item) => {
        return (
          <MarketingStatsCard
            description={item.description}
            stats_number={item.stats_number}
            title={item.title}
          />
        );
      })}
    </div>
  );
};

export default MarketingStatsContainer;
