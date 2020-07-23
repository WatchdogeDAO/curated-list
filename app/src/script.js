import "core-js/stable";
import "regenerator-runtime/runtime";
import Aragon, { events } from "@aragon/api";

const app = new Aragon();
const appState = app.store(
  async (state, { event, returnValues }) => {
    if (state.archivers)
      try {
        switch (event) {
          case "ArchiverAdded":
            return handleArchiverAdded(state, returnValues);
          case "ArchiverRemoved":
            return handleArchiverRemoved(state, returnValues);
          case events.SYNC_STATUS_SYNCING:
            return { ...state, isSyncing: true };
          case events.SYNC_STATUS_SYNCED:
            return { ...state, isSyncing: false };
          default:
            return state;
        }
      } catch (err) {
        console.log(err);
      }
  },
  {
    init: initializeState(),
  }
);

appState.subscribe(console.log);

/***********************
 *                     *
 *   Event Handlers    *
 *                     *
 ***********************/

function initializeState() {
  return async cachedState => {
    let newState = { ...cachedState };

    if (newState.archivers === undefined) {
      newState.archivers = [];
    }

    return { ...newState };
  };
}

function handleArchiverAdded(state, values) {
  console.log(state);
  state.archivers = [{ id: values.id, reason: values.reason }];
  return state;
}

function handleArchiverRemoved(state, event) {
  return state;
}

// async function getValue() {
//   return parseInt(await app.call("value").toPromise(), 10);
// }
