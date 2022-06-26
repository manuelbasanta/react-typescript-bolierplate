import { createSlice } from '@reduxjs/toolkit';
import { ComponentState } from './component-types';

const initialState: ComponentState = {
  text: 'Initial text',
};

const componentReducer = createSlice({
  name: 'component',
  initialState,
  reducers: {
    changeText: (state, action) => action.payload,
  },
});

export const { changeText } = componentReducer.actions;
export default componentReducer.reducer;
