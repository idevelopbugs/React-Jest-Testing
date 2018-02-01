import React from 'react';
import { shallow} from 'enzyme';
import CreateNewPost from '../components/CreateNewPost';

it('Should call props.updatePosts on submit', () => {
  const submit = jest.fn();
  const newPost = shallow(<CreateNewPost updatePosts={submit} author={''} />);
  newPost
    .find('#title')
    .simulate('change', {target: { name: 'title', value: 'test'} });
  newPost.find('form').simulate('submit', { preventDefault() {} });

  expect(submit).toHaveBeenCalled();
});

it('Should clear state on submit', () => {
  const newPost = shallow(<CreateNewPost author={''} updatePosts={() => {}} />);
  newPost
    .find('#title')
    .simulate('change', {target: { name: 'title', value: 'test'} });
  newPost.find('form').simulate('submit', { preventDefault() {} });

  expect(newPost.state().title).toBe('');
});

it('Should call prevent default on submit', () => {
  const preventDefault = jest.fn();
  const newPost = shallow(<CreateNewPost author={''} updatePosts={() => {}} />);
  newPost
    .find('#title')
    .simulate('change', {target: { name: 'title', value: 'test'} });
  newPost.find('form').simulate('submit', { preventDefault });

  expect(preventDefault).toHaveBeenCalled();
});