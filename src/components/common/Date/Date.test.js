import React from 'react';
import {shallow} from 'enzyme';
import Date from './Date';

describe('Component Date', () => {
  it('should render without crashing', () => {
    const component = shallow(<Date  />);
    expect(component).toBeTruthy();
  });

  it('should consist of Title element', () => {
    const component = shallow(<Date />);
    const title = component.find('.title');

    expect(title).toBeTruthy();
  });

  it('should consist of "at" element', () => {
    const component = shallow(<Date />);
    const title = component.find('.at');

    expect(title).toBeTruthy();
  });

  it('should consist of Input with name "date"', () => {
    const component = shallow(<Date />);
    const input = component.find('[name="date"]');

    expect(input).toBeTruthy();
  });

  it('should consist of Input with name "time"', () => {
    const component = shallow(<Date />);
    const input = component.find('[name="time"]');

    expect(input).toBeTruthy();
  });
});
