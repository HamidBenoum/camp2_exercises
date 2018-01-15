import React, { Component } from "react";
import App from '../App.js';
import renderer from 'react-test-renderer';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Wapiti from 'wapiti';

beforeAll(() => {
  configure({ adapter: new Adapter() });
})

test('Check form and button on the page ', () => {
  expect.assertions(1);
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});


// fill form with task1 and submit, <span>task1</span> <input type="checkbox" value="false">

test("fill input form with a new task", () => {
  expect.assertions(1);

  const testInput = 'task1';
  const load = shallow(<App />);

  load.find("form input").simulate("change", {target: {value: testInput}});
  //console.log(load.state().newTask);

  expect(load.find("form input").props().value).toEqual(load.state().newTask);
});


test("Display a new task when click on Add", () => {
  expect.assertions(1);

  const testInput = 'task1';
  const load = shallow(<App />);

  load.find("form input").simulate("change", {target: {value: testInput}});

  load.find("form").simulate("submit", { preventDefault: () => {} });
  expect(load.find("li span").text()).toBe(testInput);
});


test("Display a second task when click on Add", () => {
  expect.assertions(1);

  const testInput = 'task2';
  const load = shallow(<App />);

  load.find("form input").simulate("change", {target: {value: testInput}});
  console.log(load.state());

  load.find("form").simulate("submit", { preventDefault: () => {} });
  expect(load.find("li span").text()).toBe(testInput);
});
