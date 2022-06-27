import React from 'react';
import styled from 'styled-components';
import { TWithChildren } from '../../types';

// ------------------------------

type TProps = {
  onClick?: () => {};
};

const StyledButton = styled.button``;

// ------------------------------

export function Button({ children, onClick }: TWithChildren<TProps>) {
  return (
    <StyledButton type="button" onClick={onClick}>
      {children}
    </StyledButton>
  );
}
