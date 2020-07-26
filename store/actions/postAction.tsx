import * as types from '../actionTypes';
import { Post, Payload } from '../../types/types';

export const setPost = (value: Post): Payload => {
    return {
        type: types.SET_POST,
        payload: value,
    };
};
