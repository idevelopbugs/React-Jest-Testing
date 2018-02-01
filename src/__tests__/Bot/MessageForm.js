import React from 'react';
import { mount } from 'enzyme';
import MessageForm from '../../components/Bot/MessageForm';

it("Should update state when input changes", () => {
  const msgForm = mount(<MessageForm onSubmit={() => {}} />);
  const mess = {target: {name: 'userMessage', value: 'Hey Bot !'} };
  msgForm
    .find('input[name="userMessage"]')
    .simulate('change', mess);
  expect(msgForm.state().userMessage).toBe('Hey Bot !');
});

it("Should clear input on submit", () => {
  const submit = jest.fn();
  const msgForm = mount(<MessageForm onSubmit={submit} />);
  const mess = {target: {name: 'userMessage', value: 'Hey Bot !'} };
  msgForm
    .find('input[name="userMessage"]')
    .simulate('change', mess);
  msgForm.find('form').simulate('submit', { submit});
  expect(msgForm.state().userMessage).toBe('');
});


