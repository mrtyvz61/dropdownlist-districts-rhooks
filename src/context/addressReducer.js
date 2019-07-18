import {
    GET_ILCE, GET_MAHALLE, GET_SOKAK, GET_KAPI
} from '../types';

export default (state, action) => {
    console.info('state: ', state)
    console.info('action: ', action)
    switch (action.type) {
        case GET_ILCE:
            return {
                ...state,
                ilceler: action.payload,
            };
        case GET_MAHALLE:
            return {
                ...state,
                mahalleler: action.payload,
            };
        case GET_SOKAK:
            return {
                ...state,
                sokaklar: action.payload
            };
        case GET_KAPI: {
            return {
                ...state,
                kapilar: action.payload,
            };
        }
        default:
            return state;
    }
};
