import React from 'react';
import styled from 'styled-components';
import { TWithChildren } from '../../../types';

// ------------------------------

type TProps = {
  readonly flexDirection?: string;
  readonly justifyContent?: string;
  readonly alignItems?: string;
};

const StyledFlex = styled.div<TProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
`;

// ------------------------------

export function Flex({
  children,
  flexDirection = 'column',
  alignItems = 'center',
  justifyContent = 'center',
}: TWithChildren<TProps>) {
  return (
    <StyledFlex
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
    >
      {children}
    </StyledFlex>
  );
}
