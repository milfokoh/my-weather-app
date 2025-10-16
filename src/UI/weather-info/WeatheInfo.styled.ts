import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  // margin-top: auto; //прижали элемент к низу блока
  margin-top: 25px;
  margin-right: 10px;
  margin-left: 10px;
`;

export const TemperatureBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const HumidityBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

export const WindSpeedBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

export const Title = styled.p`
  font-size: 0.7rem;
  font-weight: bold;
  margin: 0;

  @media (max-width: 780px) {
    font-size: 0.9rem;
  }

  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

export const DataInfo = styled.p`
  font-size: 2.7rem;
  font-weight: bold;
  margin: 0;

  @media (max-width: 780px) {
    font-size: 0.9rem;
  }

  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

export const SymbolTemp = styled(DataInfo)`
  &::after {
    font-size: 2.3rem;
    content: '°C';
  }
`;

export const SymbolHumidity = styled(DataInfo)`
  &::after {
    font-size: 2rem;
    content: '%';
  }
`;

export const SymbolWind = styled(DataInfo)`
  &::after {
    font-size: 2rem;
    content: 'м/с';
  }
`;
