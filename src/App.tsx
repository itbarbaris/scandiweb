import React, { useState } from 'react';
import Slider from './components/Slider';
import styled, { createGlobalStyle } from 'styled-components';
import Image from './components/Image';

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

  .gallery {
    margin: 0 auto;
    max-width: 600px;
  }
`;

const Switcher = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;

  button {
    margin: 5px 10px;
  }
`;

const App: React.FC = () => {
  const [currentComp, setCurrentComp] = useState(0);

  return (
    <>
      <GlobalStyle />
      <Switcher>
        <button onClick={() => setCurrentComp(0)}>show reviews</button>
        <button onClick={() => setCurrentComp(1)}>show citties</button>
      </Switcher>
      {currentComp === 0 && (
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
      )}
      {currentComp === 1 && (
        <Slider className='gallery'>
          <Image src='../public/imgs/1.jpeg' />
          <Image src='../public/imgs/2.jpeg' />
          <Image src='../public/imgs/3.jpeg' />
        </Slider>
      )}
    </>
  );
};

export default App;
