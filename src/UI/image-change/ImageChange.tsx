import type { FC } from 'react';
import type { TImageChangeProps } from './ImageChange.types';
import { ImageWarapper, ImageWeather } from './ImageChange.styled';

const ImageChange: FC<TImageChangeProps> = ({ condition }) => {
  const weatherCondition = [
    { name: 'clear', path: '1.png' },
    { name: 'rain', path: '2.png' },
    { name: 'cloudy', path: '3.png' },
    { name: 'overcast', path: '4.png' },
  ];

  return (
    <ImageWarapper>
      {weatherCondition
        .filter((cond) => cond.name === condition)
        .map((cond) => (
          <ImageWeather key={cond.name} src={`src/assets/${cond.path}`} />
        ))}
    </ImageWarapper>
  );
};

export default ImageChange;
