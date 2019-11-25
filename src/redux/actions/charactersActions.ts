import Axios from 'axios';
import { Dispatch } from 'redux';
import * as types from './../types';
import * as apiUrls from './../../routes/ApiUrl';

export const getCharacter = (payload: object) => ({ type: types.CHARACTER_FETCH_SUCCESSFUL, payload });
export const getCharacterList = (payload: object) => ({ type: types.CHARACTERS_FETCH_SUCCESSFUL, payload });
export const getCharactersSearched = (payload: object) => ({ type: types.CHARACTERS_SEARCH_SUCCESSFUL, payload });
export const getAddToCharacterList = (payload: object) => ({ type: types.GET_ADD_TO_CHARACTERS_FETCH_SUCCESSFUL, payload });
export const errorCharacter = (payload: object) => ({ type: types.CHARACTER_ERROR, payload });
export const characterLoading = () => ({ type: types.CHARACTER_LOADING });

export const characterFetch = (characterUrl: string) => async (dispatch: Dispatch) => {
  dispatch(characterLoading());
  try {
    const { data } = await Axios.get(characterUrl);
    dispatch(getCharacter({ character: { ...data } }));
  } catch (error) {
    const { message } = error;
    dispatch(errorCharacter({ error: message }));
  }
};

export const characterListFetch = (search: string = '') => async (dispatch: Dispatch) => {
  dispatch(characterLoading());

  const switchUrl = search ? apiUrls.URL_SEARCH_CHARACTERS(search) : apiUrls.URL_GET_CHARACTERS;

  try {
    const {
      data: { results, next }
    } = await Axios.get(switchUrl);

    dispatch(getCharacterList({ characters: results, nextPage: next }));
  } catch (error) {
    const { message } = error;
    dispatch(errorCharacter({ error: message }));
  }
};

export const addCharacterToListFetch = (nextPageUrl: string) => async (dispatch: Dispatch) => {
  dispatch(characterLoading());
  try {
    const {
      data: { results, next }
    } = await Axios.get(nextPageUrl);

    dispatch(getAddToCharacterList({ characters: results, nextPage: next }));
  } catch (error) {
    const { message } = error;
    dispatch(errorCharacter({ error: message }));
  }
};
