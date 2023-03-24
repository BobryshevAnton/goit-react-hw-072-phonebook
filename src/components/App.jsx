import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
//
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/operations';
import { selectContacts } from './redux/selectors';

import Notiflix from 'notiflix';
import css from './app.module.css';
// success ;
//  failure ;
//  warning ;
//  info;
//

const App = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={css.form}>
      {isLoading && Notiflix.Notify.success('Loading contact list...')}
      {error && Notiflix.Notify.success({ error })}

      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
