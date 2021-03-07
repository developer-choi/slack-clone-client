import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from '../components/layout/Layout';
import ChatPage from '../components/ChatPage';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from '../utils/extend/firebase';
import LoginPage from './LoginPage';
import styled from 'styled-components';
import Spinner from 'react-spinkit';
import {theme} from '../utils/style/theme';

export default function Routes() {

  const [user, loading] = useAuthState(auth);
  
  if (loading) {
    return (
        <LoadingWrap>
          <Spinner name="ball-spin-fade-loader" color={theme.main} fadeIn="none"/>
        </LoadingWrap>
    );
  }

  return (
      <Switch>
        {!user ?
            <LoginPage/>
            :
            <Route>
              <Layout>
                <ChatPage/>
              </Layout>
            </Route>
        }
      </Switch>
  );
}


const LoadingWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
