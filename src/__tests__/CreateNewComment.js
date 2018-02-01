import React from 'react';
import { shallow } from 'enzyme';
import CreateNewComment from '../components/CreateNewComment';

it('Should call preventDefault on submit', () => {
  const preventDefault = jest.fn();
  const newComment = shallow(<CreateNewComment postId={''} author={''} updateComments={() => {}} />);
  newComment
    .find('#comment')
    .simulate('change', {target: {name: 'comment', value: 'Passing in a comment !'} });
  newComment.find('form').simulate('submit', { preventDefault });

  expect(preventDefault).toHaveBeenCalled();
});

it('Should clear state when form is submitted', () => {
  const newComment = shallow(<CreateNewComment postId={''} author={''} updateComments={() => {}} />);
  newComment
    .find('#comment')
    .simulate('change', {target: {name: 'comment', value: 'I live in da state'} });
  newComment.find('form').simulate('submit', { preventDefault() {} });

  expect(newComment.state().comment).toBe('');
});

it('Should update state when input changes', () => {
  const submit = jest.fn();
  const newComment = shallow(<CreateNewComment postId={'666'} author={'Seytan'} updateComments={submit} />);
  const comment = {target: {name: 'comment', value: 'State changed !'} };
  newComment
    .find('#comment')
    .simulate('change', comment);

  expect(newComment.state().comment).toBe('State changed !');
});



