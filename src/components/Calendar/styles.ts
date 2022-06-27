import styled, { css } from 'styled-components';
import { Colors } from '../../styles/colors';

const SharedInline = css`
  width: 1rem;
  height: 1rem;
  display: inline-block;
  border: 1px solid ${Colors.tertiary};
  text-align: center;
  border-radius: 0.25rem;
  padding: 1px;
  font-weight: normal;
`;

// ------------------------------

export const StyledCalendar = styled.div`
  width: 60%;
  border: 1px solid ${Colors.tertiary};
`;

export const CalendarTitle = styled.h2`
  margin-left: 0.625rem;
  color: ${Colors.primary};
`;

export const DateBlock = styled.div`
  display: block;
  font-size: 0;
  vertical-align: middle;

  :hover {
    cursor: pointer;
  }
`;

export const Inline = styled.div`
  color: ${Colors.primary};
  font-size: 0.75px;
  display: inline-block;

  #prev::before {
    ${SharedInline};

    content: '<';
  }

  #now {
    ${SharedInline};
    width: 3rem;
    height: 1.25rem;
  }

  #next::after {
    ${SharedInline};

    content: '>';
    margin-right: 0.625rem;
  }
`;
