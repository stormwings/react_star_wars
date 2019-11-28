import * as types from '../types';

const INITIAL_STATE = {
  loading: false,
  characters: null as any,
  character: null as any,
  nextPage: '',
  message: '',
  error: false
};

export default function(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case types.CHARACTER_ERROR: {
      const { error } = action.payload;
      console.warn(error);
      return { ...state, error: true, loading: false };
    }
    case types.CHARACTER_LOADING: {
      return { ...state, loading: true, character: null };
    }
    case types.CHARACTER_UNMOUNT: {
      return { ...INITIAL_STATE };
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
      const { characters, nextPage } = action.payload;

      return {
        ...state,
        characters,
        loading: false,
        // if nextPage is null, keep the last
        nextPage: nextPage ? nextPage : state.nextPage
      };
    }
    case types.GET_ADD_TO_CHARACTERS_FETCH_SUCCESSFUL: {
      const { characters, nextPage } = action.payload;
      const sumCharacters = [...state.characters, ...characters];

      return {
        ...state,
        characters: sumCharacters,
        nextPage,
        loading: false
      };
    }
    default:
      return { ...state };
  }
}
