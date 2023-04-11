import { extendTheme } from "@chakra-ui/react";
import { createMultiStyleConfigHelpers } from "@chakra-ui/system";

const helpers = createMultiStyleConfigHelpers([
  "testContainer",
  "testChildren",
]);

export const TestContainer = helpers.defineMultiStyleConfig({
  baseStyle: {
    testContainer: {
      border: "5px solid green",
    },
    testChildren: {
      color: "blue",
    },
  },
});

export const theme = extendTheme({
  components: {
    TestContainer,
  },
});
