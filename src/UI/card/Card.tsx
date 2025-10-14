import { useEffect, useState, type FC } from 'react';
import type { TCardProps } from './Card.types';
import { TitleWrapper, Title, Wrapper, LocationIcon } from './Card.styled';
import ImageChange from '../image-change';
import WeatherInfo from '../weather-info';

const Card: FC<TCardProps> = ({}) => {
  const [weather, setWeather] = useState({
    info: { tzinfo: { name: '' } },
    fact: { wind_speed: 0, humidity: 0, temp: 0 },
  });

  useEffect(() => {
    // the logic is hidden
  }, []);

  if (!weather) return <p>Загрузка...</p>;

  return (
    <Wrapper>
      <TitleWrapper>
        <LocationIcon />
        <Title>{weather.info.tzinfo.name || 'not found'}</Title>
      </TitleWrapper>
      <ImageChange src="src\assets\3.png" />
      <WeatherInfo
        temp={weather.fact.temp || 0}
        humidity={weather.fact.humidity || 0}
        windSpeed={weather.fact.wind_speed || 0}
      />
    </Wrapper>
  );
};

export default Card;
