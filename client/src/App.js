import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {AuthProvider} from './contexts/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/genericStyles.css';
import {RoutesList} from './Routes';

const App = () => {
  // useEffect(() => {
  //   if (window.location.pathname == '/') {
  //     window.location.replace('/login');
  //   }
  // }, []);

  return (
    <AuthProvider>
      <BrowserRouter>
        <RoutesList />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
