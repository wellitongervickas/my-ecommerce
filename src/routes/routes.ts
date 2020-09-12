import { FC } from 'react'

import Home from 'views/home';
import Product from 'views/product';
import Cart from 'views/cart';

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
}, {
  path: '/cart',
  name: 'cart',
  component: Cart,
  exact: true,
}];

export default routes;
