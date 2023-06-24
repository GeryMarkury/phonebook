// import { addContact, deleteContact, setFilter } from "./actions";
// import { createReducer } from "@reduxjs/toolkit";

// const contactsInitialState = [
//     {
//         id: 0,
//         name: "Gery",
//         number: "11-111-11",
//     }
// ];

// export const contactsReducer = createReducer(contactsInitialState, {
//     [addContact]: (state, {payload}) => {
//         const contactExists = state.find(
//             contact => contact.name.toLowerCase() === payload.name.toLowerCase()
//         );
//         if (contactExists) {
//             alert(`${payload.name} is already in contacts.`);
//             return;
//         }
//         state.push(payload);
//     },
//     [deleteContact]: (state, {payload}) => {
//         const index = state.findIndex(contact => contact.id === payload);
//         state.splice(index, 1);
//     },
// });

// const filterInitialState = "";

// export const filterReducer = createReducer(filterInitialState, {
//     [setFilter]: (state, {payload}) => {
//         return payload;
//     },
// });