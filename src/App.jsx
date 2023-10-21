import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const {
    authUser = null,
    isPreload = false,
  } = useSelector((states) => states)

  const dispatch = useDispatch();

  useEffect

  return (
    <>
    </>
  );
}

export default App;
