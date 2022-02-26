import React from 'react';
import {shallow} from 'enzyme';
import Schedule from './Schedule';

describe('Component Schedule', () => {
  it('should render without crashing', () => {
    const component = shallow(<Schedule  />);
    expect(component).toBeTruthy();
  });

  it('should consist of Title element', () => {
    const component = shallow(<Schedule />);
    const title = component.find('.title');

    expect(title).toBeTruthy();
  });

  it('should consist of Radio Input with value false', () => {
    const component = shallow(<Schedule />);
    const input = component.find('[value=false]');

    expect(input).toBeTruthy();
    expect(input.props().type).toEqual('radio');
  });

  it('should consist of Radio Input with value "date"', () => {
    const component = shallow(<Schedule />);
    const input = component.find('[value="date"]');

    expect(input).toBeTruthy();
    expect(input.props().type).toEqual('radio');
  });

  it('should consist of Radio Input with value "daily"', () => {
    const component = shallow(<Schedule />);
    const input = component.find('[value="daily"]');

    expect(input).toBeTruthy();
    expect(input.props().type).toEqual('radio');
  });

  it('should consist of Radio Input with value "weekly"', () => {
    const component = shallow(<Schedule />);
    const input = component.find('[value="weekly"]');

    expect(input).toBeTruthy();
    expect(input.props().type).toEqual('radio');
  });
});
