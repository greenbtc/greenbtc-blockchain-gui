import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import GreenBTCIcon from './images/greenbtc.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={GreenBTCIcon} viewBox="0 0 128 128" {...props} />;
}
