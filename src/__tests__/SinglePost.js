import React from 'react';
import { mount } from 'enzyme';
import SinglePost from '../components/SinglePost';

const mock = jest.fn();
const singlePost = mount(
  <SinglePost
    title={"The Title"}
    content={"Wall of text"}
    id={"1"}
    author={"Mr.Author"}
    currentPersona={"Mr.Author"}
    date={"2018-01-31 11:40:58"}
    onClick={mock}
  />);

it("Should have a title", () => {
  expect(singlePost.find('h2').first().text()).toEqual('The Title');
});

it("Should have content", () => {
  expect(singlePost.find('ReactMarkdown').text()).toEqual("Wall of text");
});
