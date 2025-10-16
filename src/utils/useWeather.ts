import { useEffect, useState } from 'react';

type TLocation = { lon: number; lat: number };

export function useWeather() {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const getWeather = async (loc: TLocation) => {
    try {
      setLoading(true);
      const responce = await fetch(
        `https://api.weather.yandex.ru/v2/forecast?lat=${location.lat}&lon=${location.lon}`,
        {
          headers: {
            'X-Yandex-Weather-Key': import.meta.env.VITE_YANDEX_API_KEY,
          },
        },
      );
      const data = await responce.json();
      setWeather(data);
    } catch (error) {
      console.error('Ошибка при получении погоды: ', error);
    } finally {
      setLoading(false);
    }
  };

  const initialLocation = () => {
    if (!navigator.geolocation) {
      setShowModal(true);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        setLocation({ lat: pos.coords.latitude, lon: pos.coords.longitude });
      },
      () => {
        setShowModal(true);
      },
    );
  };

  useEffect(() => {
    const saved = localStorage.getItem('userLocation');
    if (saved) {
      setLocation(JSON.parse(saved));
    } else {
      initialLocation();
    }
  }, []);

  useEffect(() => {
    if (location) getWeather(location);
  }, [location]);

  return {
    weather,
    loading,
    showModal,
    setShowModal,
    setLocation,
  };
}
