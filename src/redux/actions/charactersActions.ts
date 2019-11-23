import Axios from 'axios';
import { Dispatch } from 'redux';
import * as types from './../types';
import * as apiUrls from './../../routes/ApiUrl';

export const getCharacter = (payload: object) => ({ type: types.CHARACTER_FETCH_SUCCESSFUL, payload });
export const getCharacterList = (payload: object) => ({ type: types.CHARACTERS_FETCH_SUCCESSFUL, payload });
export const errorCharacter = (payload: object) => ({ type: types.CHARACTER_ERROR, payload });
export const characterLoading = () => ({ type: types.CHARACTER_LOADING });

export const characterFetch = (characterId: number) => async (dispatch: Dispatch) => {
  dispatch(characterLoading());
  try {
    const { data: character } = await Axios.get(apiUrls.URL_GET_CHARACTER(characterId));
    dispatch(getCharacter({ character }));
  } catch (error) {
    const { message } = error;
    dispatch(errorCharacter({ error: message }));
  }
};

export const characterListFetch = () => async (dispatch: Dispatch) => {
  dispatch(characterLoading());
  try {
    const { data: characters } = await Axios.get(apiUrls.URL_GET_CHARACTERS);
    dispatch(getCharacterList({ characters }));
  } catch (error) {
    const { message } = error;
    dispatch(errorCharacter({ error: message }));
  }
};
