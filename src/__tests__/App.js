import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../components/App';

it("Should change page to bot when button is clicked", () => {
  const app = shallow(<App />);
  app.find('Button').simulate('click');
  expect(app.state().currentPage).toBe('bot');
});

it("Should have currentPersona in childcomponent", () => {
  const app = mount(<App currentPersona=''/>);
  app.setState({currentPersona: 'Jeff'});
  expect(app.find('PersonaSwitcher').props().currentPersona).toBe('Jeff')
});