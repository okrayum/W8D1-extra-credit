'use strict';

var GroceryList = require(process.cwd() + '/script/model/grocery-list');
var assert = require('assert');

module.exports = function () {

  var myList;
  var listItem = "apple";

  this.Given(/^I have an empty grocery list$/, function (callback) {
    myList = GroceryList.create();
    callback();
  });

  this.When(/^I add an item to the list$/, function (callback) {
    myList.add(listItem);
    callback();
  });

  this.Then(/^The grocery list contains a single item$/, function (callback) {
    assert.equal(myList.getAll().length, 1, "Grocery list should increment by one item.")
    callback();
  });

  this.Then(/^I can access that item from the grocery list$/, function (callback) {
    assert.notEqual(myList.getItemIndex(listItem), -1, 'Added item should be found at non-negative index.');
    callback();
  });

};