import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";

import { MFE_BORDER } from "../constants";

const Cart = () => {
  return (
    <Box border={MFE_BORDER}>
      {[].map((beverage) => (
        <Box
          borderBottom="1px"
          borderBottomColor="gray.200"
          mb={3}
          key={[beverage.producerName, beverage.beverageName].join("")}
        >
          <Box>
            <Text fontSize="2xl">
              <strong>{beverage.producerName}</strong>&nbsp;
              {beverage.beverageName}
            </Text>
          </Box>
          <Box>
            <Text>{beverage.beverageStyle}</Text>
          </Box>
        </Box>
      ))}
      <Box>
        <Button width="100%">Checkout</Button>
      </Box>
    </Box>
  );
};

export default Cart;
