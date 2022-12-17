import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchApi } from '../redux/Greeting';

const Greeting = () => {
  const dispatch = useDispatch();
  const me = useSelector(
    (state) => (state.greetings),
  );

  useEffect(() => {
    dispatch(fetchApi());
  }, [dispatch]);

  return (

    <h1>
      {me.greetings.message}
    </h1>
  );
};

export default Greeting;