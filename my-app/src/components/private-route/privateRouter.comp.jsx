/*import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { DefaultLayout } from '../../layout/DefaultLayout';
import { useSelector, useDispatch } from 'react-redux';
import { loginSuccess } from '../login/loginSlice';
import {fetchNewAccessJWT} from '../../api/userApi'

export const PrivateRoute = ({ children }) => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.login);

  useEffect(() => {
    const updateAccessJwt =async ()=> {
        const result = await fetchNewAccessJWT()
        result && dispatch(loginSuccess());
    }
     updateAccessJwt();
     sessionStorage.getItem('accessJWT') && dispatch(loginSuccess());
  }, [dispatch]);
  return isAuth ? (
    <DefaultLayout>{children}</DefaultLayout>
  ) : (
    <Navigate to="/" /> 
    );
    } */


/*import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { DefaultLayout } from '../../layout/DefaultLayout';
import { useSelector, useDispatch } from 'react-redux';
import { loginSuccess } from '../login/loginSlice';
import { fetchNewAccessJWT } from '../../api/userApi';

export const PrivateRoute = ({ children }) => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.login);

  useEffect(() => {
    const updateAccessJwt = async () => {
      try {
        const result = await fetchNewAccessJWT();

        if (result) {
          const accessJWT = sessionStorage.getItem('accessJWT');
          if (accessJWT) {
            dispatch(loginSuccess());
          }
        }
      } catch (error) {
        console.warn("JWT refresh failed or no token found:", error.message);
        // Tu peux aussi rediriger ou forcer un logout ici si tu veux
      }
    };

    // Check d'abord si le token existe déjà
    const token = sessionStorage.getItem('accessJWT');
    if (token) {
      dispatch(loginSuccess());
    } else {
      updateAccessJwt(); // essaie d’en obtenir un nouveau
    }
  }, [dispatch]);

  return isAuth ? (
    <DefaultLayout>{children}</DefaultLayout>
  ) : (
    <Navigate to="/" />
  );
};*/


import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { DefaultLayout } from '../../layout/DefaultLayout';
import { useSelector, useDispatch } from 'react-redux';
import { loginSuccess } from '../login/loginSlice';
import {getUserProfile} from '../../page/dashboard/userAction'
import { fetchNewAccessJWT } from '../../api/userApi';

export const PrivateRoute = ({ children }) => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.login);
  const { user } = useSelector((state) => state.user);

  const [loading, setLoading] = useState(true); // 👈 ajout

  useEffect(() => {
    const updateAccessJwt = async () => {
      try {
        const result = await fetchNewAccessJWT();
        if (result) {
          const accessJWT = sessionStorage.getItem('accessJWT');
          if (accessJWT) {
            dispatch(loginSuccess());
          }
        }
      } catch (error) {
        console.warn("JWT refresh failed or no token found:", error.message);
      } finally {
        setLoading(false); // 👈 arrêt du loading
      }
    };
    !user._id && dispatch(getUserProfile())
    

    const token = sessionStorage.getItem('accessJWT');
    if (token) {
      dispatch(loginSuccess());
      setLoading(false);
    } else {
      !sessionStorage.getItem('accessJWT') && localStorage.getItem('sotetelDeskSite') && updateAccessJwt();
    }
    !isAuth && sessionStorage.getItem && dispatch(loginSuccess());
  }, [dispatch,isAuth,user._id]);

  if (loading) return null; // 👈 ou un loader

  return isAuth ? (
    <DefaultLayout>{children}</DefaultLayout>
  ) : (
    <Navigate to="/" />
  );
};



























