import { RootState } from '../../store';

const selectText = (state:RootState): string => state.component.text;

export default selectText;
