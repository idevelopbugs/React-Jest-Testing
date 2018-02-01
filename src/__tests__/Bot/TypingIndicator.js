import React from 'react';
import { shallow, mount } from 'enzyme';
import TypingIndicator from '../../components/Bot/TypingIndicator';

it("Should not render element if typing is false", () => {
  const wrapper = mount(<TypingIndicator typing={false}/>);
  expect(wrapper.find('.TypingIndicator').exists()).toEqual(false);
});

it("Should render element if typing is true", () => {
  const wrapper = mount(<TypingIndicator typing={true}/>);
  expect(wrapper.find('.TypingIndicator').exists()).toEqual(true);
});