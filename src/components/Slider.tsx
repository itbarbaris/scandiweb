import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import cx from 'classnames';

const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;

  .slider {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      width: 60px;
      height: 60px;
      background-color: transparent;
      border: none;
      padding: 10px;
      position: relative;
      margin: 10px;
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        display: block;
        width: 100%;
        height: 100%;
        max-width: 20px;
        max-height: 20px;
      }

      &:focus {
        outline: none;
      }

      .prev {
        border-top: 1px solid black;
        border-left: 1px solid black;
        transform: rotate(-45deg);
      }

      .next {
        border-top: 1px solid black;
        border-right: 1px solid black;
        transform: rotate(45deg);
      }
    }

    .slides {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.5s all;
      overflow: hidden;
      position: relative;
      height: 100%;
      width: 100%;

      .slide {
        opacity: 0;
        transform: scale(0);
        position: absolute;
        transition: 0.5s all;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        &.active {
          transform: scale(1);
          opacity: 1;
        }
      }
    }
  }

  .navigation {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);

    & > button {
      width: 20px;
      height: 20px;
      border: 1px solid darkseagreen;
      border-radius: 50%;
      background-color: transparent;
      padding: 5px;
      margin: 5px;
      transition: 0.3s all;

      &.active {
        background-color: rgba(85, 107, 47, 0.85);
      }

      &:focus {
        outline: none;
      }
    }
  }
`;

interface ISliderProps {
  className?: string;
  children: React.ReactNode[];
}

const Slider: React.FC<ISliderProps> = ({ children, className }) => {
  const [index, setIndex] = useState(0);
  const [touchPosition, setTouchPosition] = useState<number | null>(null);

  const handleTouchStart = (event: React.TouchEvent<HTMLElement>) => {
    // get touch down position to calculate movement direction
    const touchDownPos = event.touches[0].clientX;

    setTouchPosition(touchDownPos);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLElement>) => {
    const touchDownPos = touchPosition;

    if (!touchDownPos) return;
    // get current position to calculate movement direction
    const currentTouchPos = event.touches[0].clientX;
    const diff = touchDownPos - currentTouchPos;
    // if swipe left, go to next slide
    if (diff > 5) {
      setIndex(index + 1);
    }
    // if swipe right, go to prev slide
    if (diff < -5) {
      setIndex(index - 1);
    }

    setTouchPosition(null);
  };

  const handleIndexChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    const name = event.currentTarget.name;
    const value = Number(event.currentTarget.value);

    // if we click nav buttons, switch right to the choosen slide
    if (name === 'navigation') {
      setIndex(value);
    } else {
      // else go to next/prev slide depending on what button is pressed
      setIndex(index + value);
    }
  };

  //reset index after going below/over zeroth/last element's index
  useEffect(() => {
    const lastChildIdx = children.length - 1;

    if (index < 0) {
      setIndex(lastChildIdx);
    }

    if (index > lastChildIdx) {
      setIndex(0);
    }
  }, [index]);

  return (
    <SliderWrapper className={className}>
      <div
        className='slider'
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <button type='button' name='slider' value='-1' onClick={handleIndexChange}>
          <span className='prev' />
        </button>
        <div className='slides'>
          {children.map((item, idx) => {
            const cn = cx({
              slide: true,
              active: idx === index,
              prev: idx === index - 1 || (index === 0 && idx === children.length - 1),
            });
            return (
              <article className={cn} key={idx}>
                {item}
              </article>
            );
          })}
        </div>
        <button type='button' name='slider' value='1' onClick={handleIndexChange}>
          <span className='next' />
        </button>
      </div>
      <div className='navigation'>
        {children.map((_, idx) => (
          <button
            key={idx}
            value={idx}
            name='navigation'
            type='button'
            className={idx === index ? 'active' : undefined}
            onClick={handleIndexChange}
          />
        ))}
      </div>
    </SliderWrapper>
  );
};

export default Slider;
