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
  ContextMenu,
  ContextMenuItem,
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
          return [
            <div
              css={`
                display: inline-flex;
                word-break: break-all;
              `}
            >
              <p>{id}</p>
            </div>,
            <div
              css={`
                display: inline-flex;
                word-break: break-all;
              `}
            >
              <p>{reason}</p>
            </div>,
          ];
        }}
        renderEntryActions={({ id, reason }) => {
          return (
            <ContextMenu>
              <ContextMenuItem>Remove Member</ContextMenuItem>
            </ContextMenu>
          );
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

const Field = text => {
  return <Text></Text>;
};

export default App;
