// import libraries
import { createGlobalStyle } from 'styled-components';

// import variables
import { colors, fonts } from './stylesVariables';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Lato:wght@300;400;700&display=swap');
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${fonts.fontLato};
  }
  h1 {
    font-size: ${fonts.h1};
    margin: 0;
    }
	h2 {
    font-size: ${fonts.h2};
    margin: 0;
  }
	h3 {
    font-size: ${fonts.h3};
    margin: 0;
  }
	p {
    font-size: ${fonts.p};
    margin: 0;
  }
	small {
    font-size: ${fonts.small};
    margin: 0;
  }
  .active {
    width: 60% !important;
    color: ${colors.main} !important;
    box-shadow: 1px 1px 10px rgba(60, 141, 199, 0.5);
  }
`;
