// import propTypes from 'prop-types';
import { Contacts } from './Contacts';
import css from './Contacts.module.css';

import { setFilter } from 'redux/actions'; //redux
import { useDispatch } from 'react-redux'; //redux

export const ContactList = ({
  deleteContactProps,
  onChangeProps,
  findItems,
}) => {
  const dispatch = useDispatch();

  const onChangeFilter = e => {
    // dispatch(addContact(form.name.value, form.number.value));
    // dispatch(deleteContact(currentId));
    // console.log(e.currentTarget.value);
    dispatch(setFilter(e.currentTarget.value));
  };
  return (
    <div>
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          // onChange={onChangeProps}
          onChange={onChangeFilter}
        />
      </label>
      <ul className={css.contacts_list}>
        <Contacts
        // findItems={findItems}
        // deleteContactProps={deleteContactProps}
        />
      </ul>
    </div>
  );
};

// ContactList.propTypes = {
//   onChangeProps: propTypes.func.isRequired,
//   findItems: propTypes.array.isRequired,
//   deleteContactProps: propTypes.func.isRequired,
// };
