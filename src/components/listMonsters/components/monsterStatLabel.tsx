import React from 'react';

// Components
import { forwardRef, StatLabel, } from '@chakra-ui/react';

// Types
import type { StatLabelProps } from '@chakra-ui/react';


export const MonsterStatLabel = forwardRef<StatLabelProps, "div">((props, ref) => (
  <StatLabel display={'flex'} alignItems={'flex-top'} ref={ref} {...props} />
))