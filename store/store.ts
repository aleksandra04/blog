import { useMemo } from 'react';
import { Reducer } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as types from './actionTypes';
import { ReduxState } from '../types/types';

let store;

const initialState: ReduxState = {
    posts: [],
    post: null,
    loading: false,
    error: null,
};

const reducer: Reducer<ReduxState> = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_POSTS:
            return {
                ...state,
                posts: action.payload,
                loading: false,
                error: null,
            };
        case types.GET_POST:
            return {
                ...state,
                post: action.payload,
                loading: false,
                error: null,
            };
        case types.SET_POST:
            return {
                ...state,
                post: action.payload,
                loading: false,
                error: null,
            };
        default:
            return state;
    }
};

function initStore(preloadedState = initialState) {
    return createStore(reducer, preloadedState, composeWithDevTools(applyMiddleware()));
}

export const initializeStore = (preloadedState) => {
    let _store = store ?? initStore(preloadedState);

    if (preloadedState && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedState,
        });
        store = undefined;
    }

    if (typeof window === 'undefined') return _store;
    if (!store) store = _store;

    return _store;
};

export function useStore(initialState: ReduxState) {
    const store = useMemo(() => initializeStore(initialState), [initialState]);
    return store;
}
