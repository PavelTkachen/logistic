import React from 'react';
import themes from '@src/utils/themes';

import './style.less';

interface Props {
  theme?: string | string[];
  children: React.ReactNode;
}

export const LayoutContent = ({ theme, children }: Props) =>
  <div className={themes('LayoutContent', theme)}>{children}</div>