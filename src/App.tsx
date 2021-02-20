import React from 'react';
import Slider from './components/Slider';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Slider>
        <article>
          <h2>I love cookies</h2>
          <div>Lorem, ipsum.</div>
          <p>Lorem, ipsum dolor.</p>
        </article>
        <article>
          <h2>I love cats</h2>
          <div>Lorem, ipsum.</div>
          <p>Lorem, ipsum dolor.</p>
        </article>
        <article>
          <h2>I love Scandiweb &lt;3</h2>
          <div>Lorem, ipsum.</div>
          <p>Lorem, ipsum dolor.</p>
        </article>
      </Slider>
    </>
  );
};

export default App;
