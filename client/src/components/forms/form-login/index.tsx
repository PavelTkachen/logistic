import React, { Component, useCallback } from 'react';
import PropTypes from 'prop-types';
import themes from '@src/utils/themes';
import { LayoutField } from '@src/components/layouts/layout-field';
import Input from '@src/components/elements/input';
import Error from '@src/components/elements/error';
import Button from '@src/components/elements/button';

import './style.less';

interface FormState {
  login: string;
  password: string;
}

interface Props {
  data: FormState;
  errors: any[];
  wait: boolean;
  onChange: (data: any) => void;
  onSubmit: (data: any) => void;
  theme?: string | string[];
}

export const FormLogin: React.FC<Props> = ({ data, onChange, onSubmit, errors, wait, theme }) => {
  const callbacks = {
    onChange: useCallback((name: keyof FormState) => (value: any) => {
      onChange({ ...data, [name]: value });
    }, []),
    onSubmit: useCallback((e: React.SyntheticEvent) => {
      e.preventDefault();
      onSubmit({ ...data });
    }, [data]),
  }

  return (
    <form className={themes('FormLogin', theme)} onSubmit={callbacks.onSubmit}>
      <LayoutField
        label={'Логин'}
        input={<Input type="text" value={data.login} onChange={() => callbacks.onChange('login')} />}
        error={<Error errors={errors} path={'login'} />}
      />
      <LayoutField
        label={'Пароль'}
        input={
          <Input type="password" value={data.password} onChange={() => callbacks.onChange('password')} />
        }
        error={<Error errors={errors} path={'password'} />}
      />
      <LayoutField
        input={
          <Button type="submit" disabled={wait}>
            Войти{wait && '...'}
          </Button>
        }
        error={<Error errors={errors} path={''} />}
      />
    </form>
  );
}
