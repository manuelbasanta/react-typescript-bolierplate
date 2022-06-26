import { configureStore } from '@reduxjs/toolkit';
import componentReducer from './components/Component/component-reducer';

const store = configureStore({
  reducer: {
    component: componentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export default store;
