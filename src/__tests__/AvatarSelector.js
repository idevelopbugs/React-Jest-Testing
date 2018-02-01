import React from 'react';
import { shallow} from 'enzyme';
import AvatarSelector from '../components/AvatarSelector';

it('Should display the right picture for the currentPersona', () => {
  const avatar = shallow(<AvatarSelector currentPersona={'Morgana'} />);
  expect(avatar.props().src).toBe('morgana.png');
});
