import React from 'react';
import {shallow} from 'enzyme';
import Name from './Name';

describe('Component Name', () => {
  it('should render without crashing', () => {
    const component = shallow(<Name  />);
    expect(component).toBeTruthy();
  });

  it('should consist of Title element', () => {
    const component = shallow(<Name />);
    const title = component.find('.title');

    expect(title).toBeTruthy();
  });

  it('should consist of Input', () => {
    const component = shallow(<Name />);
    const input = component.find('input');

    expect(input).toBeTruthy();
  });
});
