import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import DailyService from './components/daily';
import Login from './components/KYC/Login';
import './index.css';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/daily',
    element: <DailyService />,
  },
  {
    path: '/login',
    element: <Login username='khangdev' password='khangdev' />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
