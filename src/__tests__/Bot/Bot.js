import React from 'react';
import { shallow, mount } from 'enzyme';
import Bot from '../../components/Bot/Bot';

it("Should return a reply when user clicks submit", () => {
  const bot = shallow(<Bot />);
  bot.find('MessageForm').simulate('submit', 'Hey human');
  expect(bot.state().messages[0].message).toBe('Hey human');
});
