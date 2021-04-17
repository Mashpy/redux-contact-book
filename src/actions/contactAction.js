import {CREATE_CONTACT, GET_CONTACT, UPDATE_CONTACT, DELETE_CONTACT} from "../constant/types";

export const addContact = (contact) => ({
      type: CREATE_CONTACT,
      payload: contact,
    });

export const getContact = (id) => ({
      type: GET_CONTACT,
      payload: id
  })

export const updateContact = (contact) => ({
  type: UPDATE_CONTACT,
  payload: contact 
})

export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: id
})