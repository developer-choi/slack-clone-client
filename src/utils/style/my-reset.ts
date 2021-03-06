import {css} from 'styled-components';

const inputTypeSearchHidden = css`
  input::-ms-clear,
  input::-ms-reveal {
    display:none;width:0;height:0;
  }
  input::-webkit-search-decoration,
  input::-webkit-search-cancel-button,
  input::-webkit-search-results-button,
  input::-webkit-search-results-decoration {
    display:none;
  }
`;

const inputTypeNumberHidden = css`
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const font = css`
  body, input, textarea, button {
    font-size: 13px;
  }
`;

export const myReset = css`
  ${inputTypeSearchHidden};
  ${inputTypeNumberHidden};
  ${font};

  * {
    margin: 0;
    padding: 0;
    border: none;
    background-color: transparent;
    box-sizing: border-box;
  }

  table {
    width: 100%;
    table-layout: fixed;
  }

  td {
    vertical-align: middle;
  }

  b, h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button, select {
    cursor: pointer;
  }

  input, button {
    &:disabled {
      cursor: not-allowed;
    }
  }

  textarea {
    resize: none;
  }
`;
