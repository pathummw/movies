import { createGlobalState } from 'react-hooks-global-state';

const { setGlobalState, useGlobalState } = createGlobalState({
  hideSearchBar : false,
  openModal : false,
});

export { setGlobalState, useGlobalState };