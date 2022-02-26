import React from 'react';
import {shallow} from 'enzyme';
import Format from './Format';

describe('Component Format', () => {
  it('should render without crashing', () => {
    const component = shallow(<Format  />);
    expect(component).toBeTruthy();
  });

  it('should consist of Title element', () => {
    const component = shallow(<Format />);
    const title = component.find('.title');

    expect(title).toBeTruthy();
  });

  it('should consist of Radio Input with value "excel"', () => {
    const component = shallow(<Format />);
    const input = component.find('[value="excel"]');

    expect(input).toBeTruthy();
    expect(input.props().type).toEqual('radio');
  });

  it('should consist of Radio Input with value "csv"', () => {
    const component = shallow(<Format />);
    const input = component.find('[value="csv"]');

    expect(input).toBeTruthy();
    expect(input.props().type).toEqual('radio');
  });
});
