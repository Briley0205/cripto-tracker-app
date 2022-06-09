import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { lightTheme } from "./theme";
const queryClient = new QueryClient();
//const root = ReactDOM.createRoot(document.getElementById("root")!);
ReactDOM.render(
  <>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </RecoilRoot>
  </>,
  document.getElementById("root")
);
