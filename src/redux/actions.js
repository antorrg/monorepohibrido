import axios from 'axios'
export const GET_CHARACTERS='GET_CHARACTERS';
export const GET_DETAIL = 'GET_DETAIL';
export const CLEAN_STATE = 'CLEAN_STATE'

export const getCharacters = (page) => {
    return async (dispatch) => {
      try {
        const data = await axios(`/api/v1/characters?page=${page}`);
        return dispatch({
          type: GET_CHARACTERS,
          payload: data.data,
        });
      } catch (error) {
        console.error(error);
      }
    };
  };
  
  export const getById = (id) => {
    return async (dispatch) => {
      try {
        const data = await axios(`/api/v1/characters/${id}`);
        return dispatch({
          type: GET_DETAIL ,
          payload: data.data,
        });
      } catch (error) {
        console.error(error);
        console.error(error.status);
        console.error(error.message);
      }
    };
  };

  export const cleanState = () => {
        return ({
          type: CLEAN_STATE,
          payload: []
        });
  };