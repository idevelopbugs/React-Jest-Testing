import React from 'react';
import { shallow } from 'enzyme';
import Button from '../components/Button';

it('Should display the class "dangerStyle" on button if danger is true', () => {
  const dangerStyle = "bg-red-dark hover:bg-red-darker text-white font-bold py-2 px-4 rounded-full";
  const button = shallow(<Button onClick={() => {}} children={''} danger={true} />);
  expect(button.props().className).toContain(dangerStyle);
});

it('Should display the default color on button if danger is false', () => {
  const defaultStyle = "bg-indigo-dark hover:bg-indigo-darker text-white font-bold py-2 px-4 rounded-full";
  const button = shallow(<Button onClick={() => {}} children={''} danger={false} />);
  expect(button.props().className).toContain(defaultStyle);
});