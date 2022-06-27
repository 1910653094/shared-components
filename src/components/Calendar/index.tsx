import React, { useEffect, useState } from 'react';
import { Flex, Grid } from '../layouts';
import { CalendarTitle, DateBlock, Inline, StyledCalendar } from './styles';

// ------------------------------

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'October',
  'September',
  'October',
  'November',
  'December',
];
const days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

// ------------------------------

export function Calendar({
  selected,
  setSelected,
  availableDays,
  className = '',
}) {

  return (
    <StyledCalendar>
      <Flex justifyContent="space-between">
        <CalendarTitle>Title</CalendarTitle>
        <DateBlock>
          <Inline id="prev" />
          <Inline id="now">Today</Inline>
          <Inline id="next" />
        </DateBlock>
      </Flex>
      <Grid gridTemplateColumns="repeat(7, calc(100% / 7))">

      </Grid>
    </StyledCalendar>
  );
}
