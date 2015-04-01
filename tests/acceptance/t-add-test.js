import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';
import { run } from '../helpers/common';

var application;

module('Acceptance: TAdd', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    run(application, 'destroy');
  }
});

test('visiting /add', function(assert) {
  assert.expect(1);

  visit('/add');
  andThen(() => {
    assert.equal(currentPath(), 'add');
  });
});

test('Toggle the default {{t-add}} component', function(assert) {
  let $defaultAdd;

  assert.expect(2);

  visit('/add');
  andThen(() => {
    $defaultAdd = find('#add-default');

    assert.equal($defaultAdd.hasClass('tcon-transform'), false);
    $defaultAdd.click();
  });
  andThen(() => {
    assert.equal($defaultAdd.hasClass('tcon-transform'), true);
  });
});

test('Verify default {{t-add}} component has correct template', function(assert) {
  assert.expect(1);

  visit('/add');
  andThen(() => {
    let $defaultAdd = find('#add-default');

    assert.equal($defaultAdd.find('span.tcon-visuallyhidden').text(), 'add item');
  });
});