import React, { Component } from "react";
import App from '../App.js';
import renderer from 'react-test-renderer';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Wapiti from 'wapiti';

beforeAll(() => {
  configure({ adapter: new Adapter() });
})

const fakeData = [
  {decathlon_id: 2, title: "chaufferette", price: 5.99},
  {decathlon_id: 3, title: "pantalon", price: 14.99},
  {decathlon_id: 1, title: "ekiden", price: 21.99}
];


test('expect array ', () => {
  expect.assertions(1);
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});


test("Should order the list by the title", () => {
  expect.assertions(1);
  const load = shallow(<App lines={fakeData}/>);
  load.find("thead tr th").at(1).simulate("click");
  expect(load.find("tr").at(1).text()).toBe("2chaufferette5.99");
})


//Test sur le navigateur en live.
//test sorting table
test("should sort the array when clicking on the first Column", () => {
  expect.assertions(1)
  return Wapiti.goto("http://localhost:3000")
    .capture(() => document.querySelector("td").textContent)
    .click("th")
    .capture(() => document.querySelector("td").textContent)
    .click("th")
    .capture(() => document.querySelector("td").textContent)
    .run()
    .then(result => {
      expect(result).toEqual(["8044622","8380024", "8044622"]);
    });
});
