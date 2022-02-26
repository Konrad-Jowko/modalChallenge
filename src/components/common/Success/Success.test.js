import React from 'react';
import {shallow} from 'enzyme';
import Success from './Success';

describe('Component Success', () => {
  it('should render without crashing', () => {
    const component = shallow(<Success  />);
    expect(component).toBeTruthy();
  });

  it('should consist of Title element', () => {
    const component = shallow(<Success />);
    const title = component.find('.title');

    expect(title).toBeTruthy();
  });
});
