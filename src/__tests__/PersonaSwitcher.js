import React from 'react';
import { shallow } from 'enzyme';
import PersonaSwitcher from '../components/PersonaSwitcher';

it("Should have 3 options in the list", () => {
  const wrapper = shallow(<PersonaSwitcher currentPersona={''} changePersona={() => {}} />);
  expect(wrapper.find('option').length).toBe(3);
});

it("Should call prop `onChange` when Zac is selected", () => {
  const onChange = jest.fn();
  const wrapper = shallow(<PersonaSwitcher currentPersona={'Morgana'} changePersona={onChange} />);
  wrapper.find('select').simulate('change', 'Zac');

  expect(onChange).toHaveBeenCalledWith('Zac');
});