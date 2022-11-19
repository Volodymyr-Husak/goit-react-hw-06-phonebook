// import css from './Contacts.module.css';
// import propTypes from 'prop-types';

// // const getVisibleContacts = (contacts, statusFilter) => {
// //   switch (statusFilter) {
// //     case statusFilters.active:
// //       return tasks.filter(task => !task.completed);
// //     case statusFilters.completed:
// //       return tasks.filter(task => task.completed);
// //     default:
// //       return tasks;
// //   }
// // };
// const getVisibleContacts = contacts => {
//   return contacts.filter(contact => contact.include(filter));
// };

// export const Contacts = ({ findItems, deleteContactProps }) => {
//   return findItems.map(({ name, number, id }) => (
//     <li className={css.contact_item} key={id}>
//       <span>
//         &#10032; {name}: {number}
//       </span>
//       <button className={css.btn} onClick={deleteContactProps} id={id}>
//         Видалити
//       </button>
//     </li>
//   ));
// };

// Contacts.propTypes = {
//   findItems: propTypes.array.isRequired,
//   deleteContactProps: propTypes.func.isRequired,
// };

//============================================================================================================
//============================================================================================================
//============================================================================================================

import css from './Contacts.module.css';
// import propTypes from 'prop-types';
import { useSelector } from 'react-redux'; //redux
import { getContacts } from 'redux/selectors';
import { getFilter } from 'redux/selectors';

import { useDispatch } from 'react-redux';
// Імпортуємо генератор екшену
import { deleteContact } from 'redux/actions';

const getVisibleContacts = (contacts, filter) => {
  if (filter.value.length === 0) {
    return contacts.arr;
  }
  const contactsArr = contacts.arr;

  const contactsFindArr = contactsArr.filter(({ name }) => {
    const nameContact = name.toLowerCase();
    const nameFilter = filter.value.toLowerCase();
    return nameContact.includes(nameFilter);
  });

  return contactsFindArr;
};

export const Contacts = ({ findItems, deleteContactProps }) => {
  const contacts = useSelector(getContacts); //redux
  const filter = useSelector(getFilter); //redux

  const dispatch = useDispatch();

  const handleDelete = e => {
    const currentId = e.currentTarget.id;
    dispatch(deleteContact(currentId));
  };

  const visibleContacts = getVisibleContacts(contacts, filter);

  return visibleContacts.map(({ name, number, id }) => (
    <li className={css.contact_item} key={id}>
      <span>
        &#10032; {name}: {number}
      </span>
      <button className={css.btn} onClick={handleDelete} id={id}>
        Видалити
      </button>
    </li>
  ));
};

// Contacts.propTypes = {
//   findItems: propTypes.array.isRequired,
//   deleteContactProps: propTypes.func.isRequired,
// };
