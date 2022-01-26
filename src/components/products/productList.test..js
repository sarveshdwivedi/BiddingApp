import React from 'react';
import ProductListTable from './productList';
import {shallow} from 'enzyme';

const props = {
  productList: [],
};
it('renders', () => {
  const wrapper=shallow(<ProductListTable {...props}/>);
  const instance = wrapper.instance();
  expect(instance).not.toBe(null);
});