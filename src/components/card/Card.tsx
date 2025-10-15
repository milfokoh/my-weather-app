import { useEffect, useState, type FC } from 'react';
import type { TCardProps } from './Card.types';
import { TitleWrapper, Title, Wrapper, LocationIcon, ButtonCity } from './Card.styled';
import ImageChange from '../../UI/image-change';
import WeatherInfo from '../../UI/weather-info';
import CityModal from './components/city-modal';

const Card: FC<TCardProps> = ({}) => {
  const [weather, setWeather] = useState({
    info: { tzinfo: { name: '' } },
    fact: { wind_speed: 0, humidity: 0, temp: 0 },
  });
  const [location, setLocation] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const getCurrentLocation = () => {
    if (!location) return;

    //fetch request
  };

  useEffect(() => {
    const getLocation = () => {
      if (!navigator.geolocation) {
        setShowModal(true);
        return;
      }

      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          setLocation({ lat: pos.coords.latitude, lon: pos.coords.longitude });
        },
        (err) => {
          setShowModal(true);
        },
      );
    };

    getLocation();
  }, []);

  useEffect(() => {
    if (location && !showModal) getCurrentLocation();
  }, [location, showModal]);

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
