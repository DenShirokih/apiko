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
import { useState, createContext } from 'react';
import { PersonalView } from 'view/PersonalView';
import { IntlProvider } from 'react-intl'
import { LOCALES } from './i18n/locales'; 
import { messages } from './i18n/messages'; 

export const LocationContext = createContext()
export const HandleChangeContext = createContext()

export const App = () => {
  const [open, setOpen] = useState(false);
  const [currentLocale, setCurrentLocale] = useState(LOCALES.ENGLISH)

  const hangeChange = (e) => {
    setCurrentLocale(e.target.value)
  }

  console.log(currentLocale)


  return (
    <IntlProvider
    messages={messages[currentLocale]}
    locale={currentLocale} 
    defaultLocale={LOCALES.ENGLISH}
   >
    <HandleChangeContext.Provider value={hangeChange}>
      <LocationContext.Provider value={currentLocale}>
   
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
          <Route
            path="personal"
            element={
              <RequireAuth>
                <PersonalView />
              </RequireAuth>
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <ToastContainer  theme="colored"/>
    </LocationContext.Provider>
    </HandleChangeContext.Provider>
    </IntlProvider>
  );
};
