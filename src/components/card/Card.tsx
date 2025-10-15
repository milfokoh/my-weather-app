import { useEffect, useState, type FC } from 'react';
import type { TCardProps } from './Card.types';
import { TitleWrapper, Title, Wrapper, LocationIcon } from './Card.styled';
import ImageChange from '../../UI/image-change';
import WeatherInfo from '../../UI/weather-info';
import CityModal from './components/city-modal';
import { useWeather } from '../../utils';

const Card: FC<TCardProps> = ({}) => {
  const { weather, showModal, setShowModal, setLocation } = useWeather();

  if (showModal)
    return (
      <CityModal
        open={showModal}
        onCancel={() => {
          setShowModal(false);
        }}
        onSelectCity={(coords) => {
          setLocation(coords);
          setShowModal(false);
        }}
      />
    );

  if (!weather) return <div>Загрузка данных...</div>;

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
