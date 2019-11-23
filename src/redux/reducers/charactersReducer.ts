import * as types from '../types';

const INITIAL_STATE = {
  loading: false,
  characters: {},
  character: {},
  message: '',
  error: ''
};

export default function(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case types.CHARACTER_ERROR: {
      const { error } = action.payload;
      return { ...state, error, loading: false };
    }
    case types.CHARACTER_LOADING: {
      return { ...state, loading: true };
    }
    case types.CHARACTERS_FETCH_SUCCESSFUL: {
      const {
        data: { characters }
      } = action.payload;

      return {
        ...state,
        characters,
        loading: false
      };
    }
    case types.CHARACTER_FETCH_SUCCESSFUL: {
      const {
        data: { character }
      } = action.payload;

      return {
        ...state,
        character,
        loading: false
      };
    }
    default:
      return state;
  }
}
