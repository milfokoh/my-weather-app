import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  height: 65vh;
  border-radius: 20px;
  background: linear-gradient(#3a6fb0, #2b3e66, #1a1a1a), rgba(255, 255, 255, 0.8);
  background-blend-mode: overlay;
  gap: 10px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 5px;
`;

export const LocationIcon = styled.p`
  font-size: 2rem;
  font-weight: bold;

  &::before {
    content: '📍';
  }

  @media (max-width: 780px) {
    font-size: 1.5rem;
  }

  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const Title = styled.p`
  font-size: 2rem;
  font-weight: bold;

  @media (max-width: 780px) {
    font-size: 1.5rem;
  }

  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const ButtonCity = styled.button``;
