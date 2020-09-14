import React, { FC } from 'react';
import Header from 'components/Header';

const Layout: FC = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);

export default Layout;
