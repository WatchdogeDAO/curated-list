const appStateReducer = state => {
  if (state === null) {
    return { archivers: [], isSyncing: true };
  }
  return state;
};

export default appStateReducer;
