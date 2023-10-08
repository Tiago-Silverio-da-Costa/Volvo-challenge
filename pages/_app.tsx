import  UseCars  from "../src/components/useCars";
import "../public/css/styles.css";
import React from "react";
import { StyleProvider, ThemePicker } from "vcc-ui";

export default function HomePage() {
  return (
    <React.StrictMode>
      <StyleProvider>
        <ThemePicker variant="light">
          <UseCars />
        </ThemePicker>
      </StyleProvider>
    </React.StrictMode >
  );
}
