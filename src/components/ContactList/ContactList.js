import css from './contactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'components/redux/operations';
import { selectContacts, selectFilter } from 'components/redux/selectors';

//

export const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const { items } = useSelector(selectContacts);

  let filterContact = items.filter(elem =>
    elem.name.toLowerCase().includes(filter.filter)
  );

  return (
    <>
      <ul className={css.contactList}>
        {filterContact.map(elem => (
          <li key={elem.id} className={css.contactItem}>
            &#8226;{elem.name}: {elem.phone}
            <button
              type="button"
              className={css.contactButton}
              onClick={() => {
                dispatch(deleteContact(elem.id));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
