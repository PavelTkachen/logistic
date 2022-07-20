import React from 'react';
import PropTypes from 'prop-types';
import './style.less';
import themes from '@src/utils/themes';

type Props = {
  theme: string | string[];
  children?: React.ReactNode;
  header?: React.ReactNode;
  content?: React.ReactNode;
  footer?: React.ReactNode;
}

function LayoutPage(props: Props) {
  return (
    <div className={themes('LayoutPage', props.theme)}>
      <div className="LayoutPage__header">{props.header}</div>
      <div className="LayoutPage__content">{props.children || props.content}</div>
      <div className="LayoutPage__footer">{props.footer}</div>
    </div>
  );
};

LayoutPage.defaultProps = {
  theme: '',
};

export default React.memo(LayoutPage);
