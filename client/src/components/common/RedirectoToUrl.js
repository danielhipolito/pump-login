import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAuth} from '../../hooks/useAuth';

const RedirectToUrl = () => {
  const navigate = useNavigate();
  const {user} = useAuth();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else {
      if (window.location.pathname == '/login') {
        navigate('/');
      }
    }
  }, []);
};

export default RedirectToUrl;
