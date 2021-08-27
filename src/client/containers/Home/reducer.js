import {
    FETCH_NAME_BEGIN,
    FETCH_NAME_SUCCESS,
    FETCH_NAME_FAILURE,
    FETCH_ENV_BEGIN,
    FETCH_ENV_SUCCESS,
    FETCH_ENV_FAILURE
} from './action';

const initialState = {
    loading: false,
    error: false,
    name: '',
    env: false
};

export default function Home(state = initialState, action) {
    switch (action.type) {
        case FETCH_NAME_BEGIN:
            return {
                ...state,
                loading: true,
                error: false,
                name: ''
            };
        case FETCH_NAME_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                name: action.name
            };
        case FETCH_NAME_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
                name: ''
            };
        case FETCH_ENV_BEGIN:
            return {
                ...state,
                loaing: true,
                error: false,
                env: null
            };
        case FETCH_ENV_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                env: action.env
            };
        case FETCH_ENV_FAILURE:
            return {
                ...state,
                loading: false,
                error: false,
                env: null
            };
        default:
            return state;
    }
}