import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#e4f0f6",
      100: "#b8d4e8",
      200: "#8ab8da",
      300: "#5c9ccc",
      400: "#2e80be",
      500: "#0064b0",
      600: "#00508e",
      700: "#003c6c",
      800: "#00284a",
      900: "#001428",
    },
  },
  fonts: {
    heading: "Arial, sans-serif",
    body: "Arial, sans-serif",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
