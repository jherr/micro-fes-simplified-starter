import React from "react";
import { Box } from "@chakra-ui/react";

import BeverageCard from "./BeverageCard";
import { MFE_BORDER } from "../constants";

const Taps = () => {
  return (
    <Box border={MFE_BORDER}>
      {[].map((beverage) => (
        <BeverageCard
          key={[beverage.producerName, beverage.beverageName].join("")}
          beverage={beverage}
        />
      ))}
    </Box>
  );
};

export default Taps;
