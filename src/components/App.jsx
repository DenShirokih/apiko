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
import { useState, createContext } from 'react';
import { PersonalView } from 'view/PersonalView';
import { IntlProvider } from 'react-intl';
import { LOCALES } from './i18n/locales';
import { messages } from './i18n/messages';
import { setLocale } from 'redux/localeSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export const LocationContext = createContext();
export const HandleChangeContext = createContext();

export const App = () => {
  const [currentLocale, setCurrentLocale] = useState(getInitialLocale());
  const dispatch = useDispatch()
 
  useEffect(()=>{
    dispatch(setLocale(currentLocale))

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLocale])


function getInitialLocale() {
  const savedLocale = localStorage.getItem('locale')
  return savedLocale || LOCALES.ENGLISH
}
  
  const hangeChange = e => {
    setCurrentLocale(e.target.value);
    localStorage.setItem('locale', e.target.value)    
  };

  return (
    <IntlProvider
      messages={messages[currentLocale]}
      locale={currentLocale}
      defaultLocale={LOCALES.ENGLISH}
    >
      <HandleChangeContext.Provider value={hangeChange}>
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
          <ToastContainer theme="colored" />
      </HandleChangeContext.Provider>
    </IntlProvider>
  );
};
