const appStateReducer = state => {
  if (state === null) {
    return { count: 0, isSyncing: true };
  }
  return state;
};

export default appStateReducer;
