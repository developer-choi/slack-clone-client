import React from 'react';
import styled from 'styled-components';

export default function Home() {

  return (
      <Wrap>
        This is Home Page2
      </Wrap>
  );
}

const Wrap = styled.div`
  color: ${props => props.theme.main};
`;
