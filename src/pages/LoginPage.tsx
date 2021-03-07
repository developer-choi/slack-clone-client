import React, {useCallback} from 'react';
import styled from 'styled-components';
import SlackLogoPng from '../../public/slack-logo.png';
import {Button} from '@material-ui/core';
import {auth, provider} from '../utils/extend/firebase';

export default function LoginPage() {

  const signIn = useCallback(async () => {
    try {
      await auth.signInWithPopup(provider);
    } catch (error) {
      alert(error.message);
    }
  }, []);

  return (
      <Wrap>
        <InnerWrap>
          <img src={SlackLogoPng} alt="logo"/>
          <h1>Sign in to the slack</h1>
          <p>clone.slack.com</p>
          <Button type="submit" onClick={signIn}>
            Sign in with Google
          </Button>
        </InnerWrap>
      </Wrap>
  );
}

const Wrap = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const InnerWrap = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px lightgray, 0 1px 2px lightgray;
  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }
  > h1 {
    font-size: 26px;
  }
  > p {
    font-weight: bold;
    margin-top: 10px;
  }
  > button {
    margin-top: 50px;
    text-transform: inherit;
    background-color: #0a8d48;
    color: white;
  }
`;
