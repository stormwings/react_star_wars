import Axios from 'axios';
import { Dispatch } from 'redux';
import * as types from './../types';
import * as apiUrls from './../../routes/ApiUrl';

export const getMovie = (payload: object) => ({ type: types.MOVIE_FETCH_SUCCESSFUL, payload });
export const getMovieList = (payload: object) => ({ type: types.MOVIES_FETCH_SUCCESSFUL, payload });
export const errorMovie = (payload: object) => ({ type: types.MOVIE_ERROR, payload });
export const movieLoading = () => ({ type: types.MOVIE_LOADING });
export const movieUnmount = () => ({ type: types.MOVIE_UNMOUNT });

export const movieFetch = (movieUrl: string) => async (dispatch: Dispatch) => {
  dispatch(movieLoading());
  try {
    const { data } = await Axios.get(movieUrl);
    dispatch(getMovie({ movie: { ...data } }));
  } catch (error) {
    const { message } = error;
    dispatch(errorMovie({ error: message }));
  }
};

export const movieListFetch = () => async (dispatch: Dispatch) => {
  dispatch(movieLoading());
  try {
    const {
      data: { results }
    } = await Axios.get(apiUrls.URL_GET_MOVIES);
    dispatch(getMovieList({ movies: results }));
  } catch (error) {
    const { message } = error;
    dispatch(errorMovie({ error: message }));
  }
};
