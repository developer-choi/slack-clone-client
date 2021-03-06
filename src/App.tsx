import React, {useEffect} from 'react';
import axios from 'axios';
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';

export default function App() {

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('https://asia-northeast3-slack-clone-d3936.cloudfunctions.net/api/helloWorld1');
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    })().then();
    (async () => {
      try {
        const res = await axios.get('https://asia-northeast3-slack-clone-d3936.cloudfunctions.net/api/helloWorld2');
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    })().then();
    (async () => {
      try {
        const res = await axios.get('https://asia-northeast3-slack-clone-d3936.cloudfunctions.net/api/helloWorld3');
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    })().then();
  }, []);

  return (
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
  );
}
