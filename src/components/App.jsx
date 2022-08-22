import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { HomeView } from "view/HomeView";
import { LoginView } from "view/LogInView";
import { RegisterView } from "view/RegisterView";
import { AddProductsView } from "view/AddProduct";

export const App = () => {
  return (
   <>
   <Routes>
    <Route path="/"  element ={<Layout/>}>
    <Route index element={<HomeView/>}/>
    <Route  path="login"  element={<LoginView/>}/>
    <Route  path="register"  element={<RegisterView/>}/>
    <Route  path="add"  element={<AddProductsView/>}/>
    </Route>
    <Route path="*" element={<Navigate to="/" />} />
   </Routes>
   </>
  );
};
