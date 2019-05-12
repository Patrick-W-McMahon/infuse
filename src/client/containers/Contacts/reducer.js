import { 
    FETCH_CONTACTS_BEGIN,
    FETCH_CONTACTS_SUCCESS,
    FETCH_CONTACTS_FAILURE,
    ADD_CONTACT_BEGIN,
    ADD_CONTACT_SUCCESS,
    ADD_CONTACT_FAILURE,
    REMOVE_CONTACT_BEGIN,
    REMOVE_CONTACT_SUCCESS,
    REMOVE_CONTACT_FAILURE
} from './action';

const initialState = {
    loading: false,
    error: false,
    contacts: []
};

export default function Contacts(state = initialState, action) {
    switch (action.type) {
        case FETCH_CONTACTS_BEGIN:
            return {
                ...state,
                loading: true,
                error: false
            };
        case FETCH_CONTACTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                contacts: action.contacts
            };
        case FETCH_CONTACTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error || 'unknown error',
            };
        case ADD_CONTACT_BEGIN:
            return {
                ...state,
                loading: true,
                error: false
            };
        case ADD_CONTACT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                contacts: [...state.contacts, {...action.contact}]
            };
        case ADD_CONTACT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case REMOVE_CONTACT_BEGIN:
            return {
                ...state,
                loading: true,
                error: false
            };
        case REMOVE_CONTACT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                contacts: [
                    ...state.contacts.slice(0, action.index),
                    ...state.contacts.slice(action.index + 1)
                ]
            };
        case REMOVE_CONTACT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    } 
}