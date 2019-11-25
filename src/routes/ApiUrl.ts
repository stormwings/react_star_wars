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
 */
export const URL_GET_CHARACTERS = `${BASE_URL}people/`;

/**
 * Movies
 *
 * movies | GET | get all movies
 */
export const URL_GET_MOVIES: string = `${BASE_URL}films/`;
