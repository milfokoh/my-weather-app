import type { FC } from 'react';
import type { TWeatheInfoProp } from './WeatheInfo.types';
import {
  Wrapper,
  TemperatureBlock,
  WindSpeedBlock,
  HumidityBlock,
  Title,
  SymbolTemp,
  SymbolHumidity,
  SymbolWind,
} from './WeatheInfo.styled';

const WeatherInfo: FC<TWeatheInfoProp> = ({ temp, humidity, windSpeed }) => {
  return (
    <Wrapper>
      <TemperatureBlock>
        <Title>Temperature</Title>
        <SymbolTemp>{temp}</SymbolTemp>
      </TemperatureBlock>
      <HumidityBlock>
        <Title>Humidity</Title>
        <SymbolHumidity>{humidity}</SymbolHumidity>
      </HumidityBlock>
      <WindSpeedBlock>
        <Title>Wind Speed</Title>
        <SymbolWind>{windSpeed}</SymbolWind>
      </WindSpeedBlock>
    </Wrapper>
  );
};
export default WeatherInfo;
