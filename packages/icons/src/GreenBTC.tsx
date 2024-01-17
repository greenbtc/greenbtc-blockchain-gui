import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

import GreenBTCBlackIcon from './images/greenbtc-black.svg';
import GreenBTCIcon from './images/greenbtc.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={GreenBTCIcon} viewBox="0 0 128 128" {...props} />;
}

export function GreenBTCBlack(props: SvgIconProps) {
  return <SvgIcon component={GreenBTCBlackIcon} viewBox="0 0 128 128" sx={{ width: '100px', height: '100px' }} {...props} />;
}
