import React from 'react';
import {shallow} from 'enzyme';
import Daily from './Daily';

describe('Component Daily', () => {
  it('should render without crashing', () => {
    const component = shallow(<Daily  />);
    expect(component).toBeTruthy();
  });

  it('should consist of Title element', () => {
    const component = shallow(<Daily />);
    const title = component.find('.title');

    expect(title).toBeTruthy();
  });

  it('should consist of Input', () => {
    const component = shallow(<Daily />);
    const input = component.find('input');

    expect(input).toBeTruthy();
  });
});
