import * as types from '../types';

const INITIAL_STATE = {
  loading: false,
  characters: null as any,
  character: null as any,
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
    case types.CHARACTER_FETCH_SUCCESSFUL: {
      const { character } = action.payload;

      return {
        ...state,
        character,
        loading: false
      };
    }
    case types.CHARACTERS_FETCH_SUCCESSFUL: {
      const { characters } = action.payload;

      return {
        ...state,
        characters,
        loading: false
      };
    }
    default:
      return { ...state };
  }
}
