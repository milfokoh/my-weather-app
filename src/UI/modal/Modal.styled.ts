import styled from 'styled-components';

export const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding-inline: 15px;
  z-index: 100;
  overflow: auto;
  background: rgba(0, 0, 0, 0.5);
`;

export const StyledModal = styled.div`
  position: relative;
  max-width: 425px;
  width: 20vw;
  height: 45vh;
`;

export const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  position: absolute;
  top: -20px;
  right: -10px;
  z-index: 1;
  width: 1px;
  aspect-ratio: 1;
  margin: 0;
  padding: 20px;
  font-size: 1.4rem;
  line-height: 0rem;
  border-radius: 100%;

  &::focus {
    border: 1px solid blue;
  }
`;

export const Body = styled.div`
  position: absolute;
  margin: 0 auto;
  width: 20vw;
  height: 45vh;
  overflow: hidden;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 1);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

export const Title = styled.p`
  font-size: 1.7rem;
  font-weight: bold;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
