import React, { useCallback, useEffect, useMemo, useState } from 'react';
import detectActive from '@src/utils/detect-active';
import LayoutHeader from '@src/components/layouts/layout-header';
import { MenuTop } from '@src/components/menus/menu-top';
import Button from '@src/components/elements/button';
import Logo from '@src/components/elements/logo';
import { useLocation } from 'react-router-dom';
import useSelector from '@src/utils/hooks/use-selector';
import useServices from '@src/utils/hooks/use-services';

interface Props { }

function HeaderContainer(props: Props) {
  const select: any = useSelector((state: any) => ({
    session: state.session,
  }));

  const location = useLocation();

  const [items, changeItems] = useState(
    detectActive(
      [
        { title: 'Главная', to: '/', active: false },
      ],
      location,
    ),
  );

  useEffect(() => {
    changeItems(detectActive(items, location));
  }, [location]);

  const services = useServices();

  const callbacks = {
    onClickLogin: useCallback(() => {
      services.navigation.push('/login');
    }, []),

    onClickLogout: useCallback(() => {
      services.store.session.clear();
    }, []),
  };

  const renders = {
    right: useMemo(() => {
      let result = [];
      result.push(
        <Button theme={['clear-white', 'margins']} onClick={callbacks.onClickLogout}>
          Выход
        </Button>,
      );
      return result;
    }, [select.session, callbacks.onClickLogout, callbacks.onClickLogin]),
  };

  return <LayoutHeader left={<Logo />} right={renders.right} center={<MenuTop items={items} />} />;
}

export default React.memo(HeaderContainer);
