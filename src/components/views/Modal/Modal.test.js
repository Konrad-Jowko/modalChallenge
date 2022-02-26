import React from 'react';
import {shallow} from 'enzyme';
import Modal from './Modal';

describe('Component Modal', () => {
  const sendFormData = (data) => {
    console.log(data);
  };

  it('should render without crashing', () => {
    const component = shallow(<Modal sendFormData={sendFormData} />);

    expect(component).toBeTruthy();
  });

  it('should consist of modalTitle element', () => {
    const component = shallow(<Modal sendFormData={sendFormData} />);
    const title = component.find('.modalTitle');

    expect(title).toBeTruthy();
  });
});
