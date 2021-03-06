import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import styled from 'styled-components';

export default function Routes() {

  return (
      <Switch>
        <Route exact path="/hello">
          <Header/>
          <Hello/>
        </Route>
        <Route exact path="/world">
          <Header/>
          <World/>
        </Route>
        <Route>
          <Header/>
          <PageNotFound/>
        </Route>
      </Switch>
  );
}

function Header() {
  return (
      <HeaderWrap>
        <Link to="/hello">Hello Page Link</Link>
        <Link to="/world">World Page Link</Link>
      </HeaderWrap>
  );
}

const HeaderWrap = styled.div`
  background: blue;
  
  > a {
    color: white;
    margin-right: 10px;
  }
`;

function Hello() {
  return (
      <div>
        Hello Page
      </div>
  );
}

function World() {
  return (
      <div>
        World Page
      </div>
  );
}

function PageNotFound() {
  return (
      <div>
        Page Not Found
      </div>
  );
}
