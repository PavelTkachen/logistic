import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';

import './style.less';

interface Props {
  items: {
    title: string,
    to: string,
    active: boolean,
  }[];
}

export const MenuTop: React.FC<Props> = ({ items }) => {
  return (
    <div className="MenuTop">
      <ul className="MenuTop__list">
        {items.map((item, index) => (
          <li key={index} className={cn('MenuTop__item ', { MenuTop__item_active: item.active })}>
            <Link to={item.to} className="MenuTop__link">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}