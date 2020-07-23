import React from "react";
import { useAragonApi } from "@aragon/api-react";
import {
  Box,
  Button,
  DataView,
  GU,
  IconMinus,
  IconPlus,
  Main,
  textStyle,
  SyncIndicator,
  Tabs,
} from "@aragon/ui";
import styled from "styled-components";
import AppHeader from "./components/AppHeader";

function App() {
  const { api, appState, path, requestPath } = useAragonApi();
  const { count, isSyncing } = appState;

  const pathParts = path.match(/^\/tab\/([0-9]+)/);
  const pageIndex = Array.isArray(pathParts) ? parseInt(pathParts[1], 10) - 1 : 0;

  return (
    <Main>
      {isSyncing && <SyncIndicator />}
      <AppHeader />

      <DataView
        fields={["Id", "Reason"]}
        entries={appState.archivers}
        renderEntry={({ id, reason }) => {
          return [<p>{id}</p>, <p>{reason}</p>];
        }}
      />
    </Main>
  );
}

const Buttons = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 40px;
  margin-top: 20px;
`;

export default App;
