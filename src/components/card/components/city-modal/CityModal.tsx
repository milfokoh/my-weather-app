import type { FC } from 'react';
import type { TCityModalProp } from './CityModal.types';
import Modal from '../../../../UI/modal';
import { ButtonCity } from './CityModal.styled';

const CityModal: FC<TCityModalProp> = ({ open, onCancel, onSelectCity }) => {
  const cityAndLoc = [
    { name: 'Москва', lat: 55.7558, lon: 37.6176 },
    { name: 'Стамбул', lat: 41.0112, lon: 28.9781 },
    { name: 'Иркутск', lat: 52.289588, lon: 104.280606 },
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
