/**
 * SWAPI Base Urls
 *
 * base | {string} | set the base api url
 */
const BASE_URL: string = 'https://swapi.co/api/';

/**
 * Characters
 *
 * character | GET | get a character
 * characters | GET | get all characters
 */
export const URL_GET_CHARACTER = (id: number) => `${BASE_URL}people/${id}/`;
export const URL_GET_CHARACTERS = `${BASE_URL}/people/`;

/**
 * Movies
 *
 * movie | GET | get a movie
 * movies | GET | get all movies
 */
export const URL_GET_MOVIE = (id: number): string => `${BASE_URL}films/${id}/`;
export const URL_GET_MOVIES: string = `${BASE_URL}films/`;
