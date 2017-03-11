import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { percySnapshot } from 'ember-percy';
import { click, find } from 'ember-native-dom-helpers/test-support/helpers';

/*
 * {{t-add animation="minus"}}
 */
moduleForComponent('t-add', 'Integration | Component | t add', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{t-add}}`);

  assert.equal(find('button').textContent.trim(), 'add item');

  // Template block usage:
  this.render(hbs`
    {{#t-add}}
      template block text
    {{/t-add}}
  `);

  assert.equal(find('button').textContent.trim(), 'add item');
});

test('it creates an add transformicon with defaults', function(assert) {
  assert.expect(6);

  this.render(hbs`{{t-add}}`);
  percySnapshot(assert);

  let button = find('button');

  assert.equal(button.getAttribute('type'), 'button');
  assert.equal(button.getAttribute('aria-label'), 'add item');
  assert.ok(button.classList.contains('tcon'));
  assert.ok(button.classList.contains('tcon-plus'));
  assert.ok(button.classList.contains('tcon-plus--minus'));
  assert.notOk(button.classList.contains('tcon-transform'));
});

test('it creates an add transformicon with `is-added=true`', function(assert) {
  assert.expect(1);

  this.render(hbs`{{t-add is-added=true}}`);
  percySnapshot(assert);

  let button = find('button');

  assert.ok(button.classList.contains('tcon-transform'));
});

test('it creates an add transformicon with a non-default animation `a="check"`', function(assert) {
  assert.expect(1);

  this.render(hbs`{{t-add a="check"}}`);

  let button = find('button');

  assert.ok(button.classList.contains('tcon-plus--check'));
});

test('user can click on the transformicon', function(assert) {
  assert.expect(2);

  this.render(hbs`{{t-add id="t-add"}}`);

  let button = find('#t-add');
  assert.equal(button.classList.contains('tcon-transform'), false);

  click('#t-add');
  percySnapshot(assert);

  assert.equal(button.classList.contains('tcon-transform'), true);
});
