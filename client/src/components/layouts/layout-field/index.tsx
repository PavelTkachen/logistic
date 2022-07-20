import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import themes from '@src/utils/themes';

import './style.less';

type Props = {
  label?: React.ReactNode;
  input: React.ReactNode;
  error: React.ReactNode;
  theme?: string | string[];
}

export const LayoutField: React.FC<Props> = ({ label, input, error, theme }) => {

  return (
    <div className={themes('LayoutField', theme)}>
      <div className="LayoutField__label">{label}</div>
      <div className="LayoutField__input">
        <div className="LayoutField__input-inner">{input}</div>
        <div className="LayoutField__error">{error}</div>
      </div>
    </div>
  );
}