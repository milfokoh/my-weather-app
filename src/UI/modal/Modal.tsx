import { useState, type FC } from 'react';
import type { TModalProp } from './Modal.types';
import {
  Body,
  ButtonWrapper,
  CloseButton,
  Content,
  Overlay,
  StyledModal,
  Title,
} from './Modal.styled';

const Modal: FC<TModalProp> = ({ open, onCancel, title, children }) => {
  if (!open) return null;

  return (
    <Overlay onClick={onCancel}>
      <StyledModal>
        <CloseButton onClick={onCancel}>&times;</CloseButton>
        <Body>
          <Content>
            <Title>{title}</Title>
            <ButtonWrapper>{children}</ButtonWrapper>
          </Content>
        </Body>
      </StyledModal>
    </Overlay>
  );
};

export default Modal;
