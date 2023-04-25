import React from 'react';
import { CookiesProvider } from 'react-cookie';

type Props = {
  children: React.ReactNode;
};

export const Cookie = (props: Props) => {
  const { children } = props;

  return <CookiesProvider>{children}</CookiesProvider>;
};
