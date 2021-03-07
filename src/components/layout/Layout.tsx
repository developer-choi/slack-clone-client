import React, {PropsWithChildren} from 'react';
import Header from './Header';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import {HEIGHTS} from '../../utils/style/layout';

export default function Layout({children}: PropsWithChildren<{}>) {
  return (
      <>
        <Header/>
        <AppBody>
          <Sidebar/>
          <AppMain>
            {children}
          </AppMain>
        </AppBody>
      </>
  );
}

const AppBody = styled.div`
  display: flex;
  margin-top: ${HEIGHTS.header}px;
  height: calc(100% - ${HEIGHTS.header}px);
`;

const AppMain = styled.div`
  height: 100%;
  flex-grow: 1;
`;
