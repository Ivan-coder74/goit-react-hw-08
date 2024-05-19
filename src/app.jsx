import { useEffect, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import Layout from './components/Layout/Layout';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import {getCurrentUser} from './redux/auth/operations';
import { selectIsRef } from './redux/auth/selectors';
import { useDispatch, useSelector } from 'react-redux';
import './app.css';
 const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
 const RegisterPage = lazy(() => import('./pages/RegistrationPage/RegistrationPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));

function App() {
  const dispatch = useDispatch();
  const isRef = useSelector(selectIsRef);
   useEffect(() => {
     dispatch(getCurrentUser());
   }, [dispatch]);


   return  isRef ? (<b>Refreshing user...</b>) :(
     <Layout>
     <Suspense fallback={<Loader />}>
     <Routes>
       <Route path='/' element={<HomePage />} /> 
        <Route path='/register' element={
          <RestrictedRoute>
            <RegisterPage />
          </RestrictedRoute>} />
        <Route path='/login' element={
          <RestrictedRoute>
            <LoginPage />
          </RestrictedRoute>} />
        <Route path='/contacts' element={
          <PrivateRoute>
            <ContactsPage />
          </PrivateRoute>
        } />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      </Suspense>
     </Layout>
   );
   
}
export default App;



