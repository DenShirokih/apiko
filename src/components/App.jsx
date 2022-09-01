import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomeView } from 'view/HomeView';
import { LoginView } from 'view/LogInView';
import { RegisterView } from 'view/RegisterView';
import { AddProductsView } from 'view/AddProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FavoritesView } from 'view/FavoritesView';
import { RequireAuth } from 'hoc/RequireAuth';
import { PublicRoute } from 'hoc/PublicRoute';
import Burger from './Burger/Burger';
import Menu from './Menu/Menu';
import { useState } from 'react';



export const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
     <Burger open={open} setOpen={setOpen}/>
        <Menu  open={open} setOpen={setOpen}/>
      <Routes>
       
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeView />} />
          <Route
            path="login"
            element={
              <PublicRoute>
                <LoginView />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute>
                <RegisterView />
              </PublicRoute>
            }
          />
          <Route
            path="add"
            element={
              <RequireAuth>
                <AddProductsView />
              </RequireAuth>
            }
          />
          <Route
            path="favorites"
            element={
              <RequireAuth>
                <FavoritesView />
              </RequireAuth>
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <ToastContainer  theme="colored"/>
    </>
  );
};
