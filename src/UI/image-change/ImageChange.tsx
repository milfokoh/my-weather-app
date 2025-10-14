import type { FC } from 'react';
import type { TImageChangeProps } from './ImageChange.types';
import { ImageWarapper, ImageWeather } from './ImageChange.styled';

const ImageChange: FC<TImageChangeProps> = ({ src }) => {
  return (
    <ImageWarapper>
      <ImageWeather src={src} />
    </ImageWarapper>
  );
};

export default ImageChange;
