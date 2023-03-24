import { useDispatch } from 'react-redux';
import { filterContact } from 'components/redux/filterSlice';

import css from './filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const onFilterSearch = evt => {
    dispatch(filterContact(evt.target.value));
  };
  return (
    <>
      <h1 className={css.form__title}>Contacts:</h1>
      <h1 className={css.form__title}> Find contacts by name</h1>
      <input
        className={css.form__inputSearch}
        type="text"
        name="filter"
        onChange={onFilterSearch}
      />
    </>
  );
};
