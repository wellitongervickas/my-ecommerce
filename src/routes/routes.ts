import { FC } from 'react'

import Home from 'views/home';
import Product from 'views/product';

export interface RouteInterface {
  exact?: boolean,
  key?: string,
  path: string,
  name: string,
  component: FC,
}

const routes:  Array<RouteInterface> = [{
  path: '/',
  name: 'home',
  component: Home,
  exact: true,
}, {
  path: '/:id',
  name: 'product',
  component: Product,
  exact: true,
}];

export default routes;
