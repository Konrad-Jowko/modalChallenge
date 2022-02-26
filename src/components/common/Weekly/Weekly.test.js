import React from 'react';
import {shallow} from 'enzyme';
import Weekly from './Weekly';

describe('Component Weekly', () => {
  it('should render without crashing', () => {
    const component = shallow(<Weekly  />);
    expect(component).toBeTruthy();
  });

  it('should consist of Title element', () => {
    const component = shallow(<Weekly />);
    const title = component.find('.title');

    expect(title).toBeTruthy();
  });

  it('should consist of "at" element', () => {
    const component = shallow(<Weekly />);
    const title = component.find('.at');

    expect(title).toBeTruthy();
  });

  it('should consist of Select', () => {
    const component = shallow(<Weekly />);
    const select = component.find('select');

    expect(select).toBeTruthy();
  });

  it('should have 7 options for Select', () => {
    const component = shallow(<Weekly />);
    const options = component.find('option');

    expect(options.length).toEqual(7);
  });

  it('should consist of Input with name "time"', () => {
    const component = shallow(<Weekly />);
    const input = component.find('[name="time"]');

    expect(input).toBeTruthy();
  });
});
