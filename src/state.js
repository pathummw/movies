import { createGlobalState } from 'react-hooks-global-state';

const { setGlobalState, useGlobalState } = createGlobalState({
  hideSearchBar : false,
});

export { setGlobalState, useGlobalState };