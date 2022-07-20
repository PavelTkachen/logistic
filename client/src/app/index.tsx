import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import loadable from '@loadable/component';
import Modals from '@src/app/modals';
import Loading from '@src/app/loading';

// Динамический импорт. При сборке деление на чанки
const Main = loadable(() => import('@src/app/main'), { fallback: <Loading /> });
const Login = loadable(() => import('@src/app/login'), { fallback: <Loading /> });
const NotFound = loadable(() => import('@src/app/not-found'), { fallback: <Loading /> });

function App() {
  return (
    <Fragment>
      <Helmet>
        <title>Example</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Modals />
    </Fragment>
  );
}

export default React.memo(App);
