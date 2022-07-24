import React from 'react';
import { Calendar } from 'antd';

import LayoutPage from '@src/components/layouts/layout-page';
import HeaderContainer from '@src/containers/header-container';
import { LayoutContent } from '@src/components/layouts/layout-content';

function Main() {
  return (
    <LayoutPage header={<HeaderContainer />}>
      <LayoutContent>
          <Calendar />
      </LayoutContent>
    </LayoutPage>
  );
}

export default React.memo(Main);
