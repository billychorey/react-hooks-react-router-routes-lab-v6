// You'll need to provide routes for /, /directors,
// /actors, and /movie. The /movie route should 
// also include a URL parameter called id. Don't 
// forget that you'll need to import components 
// into this file!

import React from 'react';
import { Route } from 'react-router-dom';
import Actors from './pages/Actors';
import Directors from './pages/Directors';
import Home from './pages/Home';
import Movie from './pages/Movie';
import ErrorPage from './pages/Error';

const routes = [
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/actors',
    element: <Actors />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/directors',
    element: <Directors />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/movie/:id',
    element: <Movie />,
    errorElement: <ErrorPage />,
  },
];

export default routes;