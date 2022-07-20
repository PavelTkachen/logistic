import React from 'react';
import { LayoutContent } from '../layout-content';
import themes from '@src/utils/themes';

import './style.less';

type Props = {
  theme?: string | string[];
  children?: React.ReactNode;
  left: React.ReactNode;
  right: React.ReactNode;
  center: React.ReactNode;
}

export const LayoutHeader: React.FC<Props> = ({ left, children, right, center, theme }) => {
  return (
    <div className={themes('LayoutHeader', theme)}>
      <LayoutContent>
        <div className="LayoutHeader__wrap">
          <div className="LayoutHeader__left">{left}</div>
          <div className="LayoutHeader__center">{children || center}</div>
          <div className="LayoutHeader__right">{right}</div>
        </div>
      </LayoutContent>
    </div>
  );
}

export default LayoutHeader;
