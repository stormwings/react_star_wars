/**
 * SWAPI Base Urls
 *
 * base | {string} | set the base api url
 */
const BASE_URL: string = 'https://swapi.co/api/';

/**
 * Characters
 *
 * characters | GET | get all characters
 * search characters | GET | search characters
 */
export const URL_GET_CHARACTERS = `${BASE_URL}people/`;
export const URL_SEARCH_CHARACTERS = (search: string) => `${BASE_URL}people/?search=${search}`;

/**
 * Movies
 *
 * movies | GET | get all movies
 */
export const URL_GET_MOVIES: string = `${BASE_URL}films/`;
