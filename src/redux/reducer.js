// import { statusFilters } from './constants';
const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      // Потрібно повернути новий об'єкт стану
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };

    case 'contacts/deleteContact':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };

    case 'filter/setFilter':
      //   return {
      //     ...state,
      //     contacts: state.tasks.map(task => {
      //       if (task.id !== action.payload) {
      //         return task;
      //       }
      //       return {
      //         ...task,
      //         completed: !task.completed,
      //       };
      //     }),
      //   };
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};
