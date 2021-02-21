import React from 'react';
import styled from 'styled-components';

interface IImageProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {}

const StyledImage = styled.div`
  img {
    display: block;
    width: 100%;
    object-fit: contain;
    max-height: 100vh;
  }
`;

const Image: React.FC<IImageProps> = (props) => {
  return (
    <StyledImage>
      <img {...props} src={props.src} />
    </StyledImage>
  );
};

export default Image;
