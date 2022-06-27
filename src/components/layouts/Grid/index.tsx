import React from 'react';
import styled from 'styled-components';
import { TWithChildren } from '../../../types';

// ------------------------------

type TProps = {
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
};

const StyledGrid = styled.div<TProps>`
  display: grid;
  grid-template-columns: ${({ gridTemplateColumns }) =>
    gridTemplateColumns || 'inital'}
  grid-template-rows: ${({ gridTemplateRows }) => gridTemplateRows || 'inital'};
`;

// ------------------------------

export function Grid({
  children,
  gridTemplateColumns,
  gridTemplateRows,
}: TWithChildren<TProps>) {
  return (
    <StyledGrid
      gridTemplateColumns={gridTemplateColumns}
      gridTemplateRows={gridTemplateRows}
    >
      {children}
    </StyledGrid>
  );
}
