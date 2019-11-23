import * as types from '../types';

const INITIAL_STATE = {
  loading: false,
  movies: {},
  movie: {},
  message: '',
  error: ''
};

export default function(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case types.MOVIE_ERROR: {
      const { error } = action.payload;
      return { ...state, error, loading: false };
    }
    case types.MOVIE_LOADING: {
      return { ...state, loading: true };
    }
    case types.MOVIES_FETCH_SUCCESSFUL: {
      const {
        data: { movies }
      } = action.payload;

      return {
        ...state,
        movies,
        loading: false
      };
    }
    case types.MOVIE_FETCH_SUCCESSFUL: {
      const {
        data: { movie }
      } = action.payload;

      return {
        ...state,
        movie,
        loading: false
      };
    }
    default:
      return state;
  }
}
