import { toast } from 'react-toastify';
export const FETCH_CONTACTS = 'FETCH_CONTACTS';
export const FETCH_CONTACTS_BEGIN = 'FETCH_CONTACTS_BEGIN';
export const FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS';
export const FETCH_CONTACTS_FAILURE = 'FETCH_CONTACTS_FAILURE';
export const ADD_CONTACT = 'ADD_CONTACT';
export const ADD_CONTACT_BEGIN = 'ADD_CONTACT_BEGIN';
export const ADD_CONTACT_SUCCESS = 'ADD_CONTACT_SUCCESS';
export const ADD_CONTACT_FAILURE = 'ADD_CONTACT_FAILURE';
export const REMOVE_CONTACT = 'REMOVE_CONTACT';
export const REMOVE_CONTACT_BEGIN = 'REMOVE_CONTACT_BEGIN';
export const REMOVE_CONTACT_SUCCESS = 'REMOVE_CONTACT_SUCCESS';
export const REMOVE_CONTACT_FAILURE = 'REMOVE_CONTACT_FAILURE';

export const fetchContactsBegin = () => ({
    type: FETCH_CONTACTS_BEGIN
});

export const fetchContactsSuccess = (contacts) => ({
    type: FETCH_CONTACTS_SUCCESS,
    contacts: [...contacts]
});

export const fetchContactsFailure = ({ error }) => ({
    type: FETCH_CONTACTS_FAILURE,
    error 
});

export const addContactBegin = () => ({
    type: ADD_CONTACT_BEGIN
});

export const addContactSuccess = contact => ({
    type: ADD_CONTACT_SUCCESS,
    contact
});

export const addContactFailure = ({ error }) => ({
    type: ADD_CONTACT_FAILURE,
    error
});

export const removeContactBegin = () => ({
    type: REMOVE_CONTACT_BEGIN
});

export const removeContactSuccess = index => ({
    type: REMOVE_CONTACT_SUCCESS,
    index
});

export const removeContactFailure = error => ({
    type: REMOVE_CONTACT_FAILURE,
    error
});

export function fetchContacts() {
    return dispatch => {
        dispatch(fetchContactsBegin());
        fetch("/api/contacts",{
            method: 'GET'
        }).then(responce => {
            if(responce.ok){
                return responce.json();
            } else {
                throw new Error('Something went wrong');
            }
        }).then(responseJson => {
            toast(`Contacts reseaved`, { position: toast.POSITION.BOTTOM_RIGHT });
            dispatch(fetchContactsSuccess(responseJson));
            return responseJson;
        }).catch(error => dispatch(fetchContactsFailure(error)));
    };
};

export function addContact(contact) {
    return dispatch => {
        dispatch(addContactBegin());
        fetch("/api/contacts",{
            method: 'POST',
            body: JSON.stringify(contact),
            headers: {'Content-Type': 'application/json'}
        }).then(responce => {
            if(responce.ok){
                return responce.json();
            } else {
                throw new Error('Something went wrong');
            }
        }).then(responseJson => {
            toast(`Contact added`, { position: toast.POSITION.BOTTOM_RIGHT });
            dispatch(addContactSuccess(responseJson));
            return responseJson;
        }).catch(error => dispatch(addContactFailure(error)));
    }; 
};

export function removeContact(index) {
    return dispatch => {
        dispatch(removeContactBegin());
        fetch(`/api/contacts/${index}`,{
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        }).then(responce => {
            if(responce.ok){
                return;
            } else {
                throw new Error('Something went wrong');
            }
        }).then(() => {
            toast(`Contact remove`, { position: toast.POSITION.BOTTOM_RIGHT });
            dispatch(removeContactSuccess(index));
            return index;
        }).catch(error => dispatch(removeContactFailure(error)));
    }; 
};