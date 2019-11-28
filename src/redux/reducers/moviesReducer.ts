import * as types from '../types';

const INITIAL_STATE = {
  loading: false,
  movies: null as any,
  movie: null as any,
  message: '',
  error: false
};

export default function(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case types.MOVIE_ERROR: {
      const { error } = action.payload;
      console.warn(error);
      return { ...state, error: true, loading: false };
    }
    case types.MOVIE_LOADING: {
      return { ...state, loading: true, movie: null };
    }
    case types.MOVIE_UNMOUNT: {
      return { ...INITIAL_STATE };
    }
    case types.MOVIES_FETCH_SUCCESSFUL: {
      const { movies } = action.payload;

      return {
        ...state,
        movies,
        loading: false
      };
    }
    case types.MOVIE_FETCH_SUCCESSFUL: {
      const { movie } = action.payload;

      return {
        ...state,
        movie,
        loading: false
      };
    }
    default:
      return { ...state };
  }
}
