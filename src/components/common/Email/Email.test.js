import React from 'react';
import {shallow} from 'enzyme';
import Email from './Email';

describe('Component Email', () => {
  it('should render without crashing', () => {
    const component = shallow(<Email  />);
    expect(component).toBeTruthy();
  });

  it('should consist of Title element', () => {
    const component = shallow(<Email />);
    const title = component.find('.title');

    expect(title).toBeTruthy();
  });

  it('should consist of Input', () => {
    const component = shallow(<Email />);
    const input = component.find('input');

    expect(input).toBeTruthy();
  });
});
