import { defineConfig } from "@chakra-ui/react";

export const themeConfig = defineConfig({
  globalCss: {
    "html, body": {
      backgroundColor: "green.800",
    },
  },
  theme: {
    tokens: {
      colors: {},
    },
  },
});
