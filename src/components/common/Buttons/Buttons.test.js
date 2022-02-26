import React from 'react';
import {shallow} from 'enzyme';
import Buttons from './Buttons';

describe('Component Buttons', () => {
  const sendFormData = () => {
    console.log('click');
  };

  it('should render without crashing', () => {
    const component = shallow(<Buttons sendFormData={sendFormData} />);
    expect(component).toBeTruthy();
  });

  it('should consist of "Cancel" button', () => {
    const component = shallow(<Buttons sendFormData={sendFormData} />);
    const buttonText = component.find('.hollowButton').text();

    expect(buttonText).toEqual('Cancel');
  });

  it('should consist of "Ok" button', () => {
    const component = shallow(<Buttons sendFormData={sendFormData} />);
    const buttonText = component.find('.fullButton').text();

    expect(buttonText).toEqual('Ok');

  });
});
