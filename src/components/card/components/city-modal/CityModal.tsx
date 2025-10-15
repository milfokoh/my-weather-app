import type { FC } from 'react';
import type { TCityModalProp } from './CityModal.types';
import Modal from '../../../../UI/modal';
import { ButtonCity } from './CityModal.styled';

const CityModal: FC<TCityModalProp> = ({ open, onCancel, onSelectCity }) => {
  const cityAndLoc = [
    { name: 'Москва', lat: 55.7558, lon: 37.6176 },
    { name: 'Санкт-Петербург', lat: 59.9343, lon: 30.3351 },
    { name: 'Казань', lat: 55.7963, lon: 49.1088 },
    { name: 'Екатеринбург', lat: 56.8389, lon: 60.6057 },
  ];

  return (
    <Modal title="Выберите город:" open={open} onCancel={onCancel}>
      {cityAndLoc.map((city) => (
        <ButtonCity
          key={city.name}
          onClick={() => {
            onSelectCity({ lat: city.lat, lon: city.lon });
            onCancel();
          }}
        >
          {city.name}
        </ButtonCity>
      ))}
    </Modal>
  );
};
export default CityModal;
