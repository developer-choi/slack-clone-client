import StyledReset from 'styled-reset';
import {myReset} from './my-reset';
import {createGlobalStyle, css} from 'styled-components';

const reset = css`
  ${StyledReset};
  ${myReset};
`;

const font = css`
  body {
    font-family: "Malgun Gothic", "맑은 고딕", helvetica, "Apple SD Gothic Neo", sans-serif;
  }
`;

const layout = css`
  
  html, body, #root {
    height: 100%;
  }
  
  #root {
    display: flex;
    flex-direction: column;
  }
`;

export const GlobalStyle = createGlobalStyle`

  ${reset};
  ${font};
  ${layout};
  
  body {
    background-color: white;
  }
`;
