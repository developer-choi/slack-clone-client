import React, {PropsWithChildren} from 'react';
import Header from './Header';
import styled from 'styled-components';
import Sidebar from './Sidebar';

export default function Layout({children}: PropsWithChildren<{}>) {
  return (
      <>
        <Header/>
        <AppBody>
          <Sidebar/>
          {children}
        </AppBody>
      </>
  );
}

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
