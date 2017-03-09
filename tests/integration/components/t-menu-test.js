import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { percySnapshot } from 'ember-percy';
import { click, find } from 'ember-native-dom-helpers/test-support/helpers';

/*
 * {{t-menu animation="butterfly"}}
 */
moduleForComponent('t-menu', 'Integration | Component | t menu', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{t-menu}}`);

  assert.equal(this.$().text().trim(), 'toggle menu');

  // Template block usage:
  this.render(hbs`
    {{#t-menu}}
      template block text
    {{/t-menu}}
  `);

  assert.equal(this.$().text().trim(), 'toggle menu');
});

test('it creates a menu transformicon with defaults', function(assert) {
  assert.expect(4);

  this.render(hbs`{{t-menu}}`);
  percySnapshot(assert);

  let compButton = this.$('button');

  assert.equal(compButton.attr('type'), 'button');
  assert.equal(compButton.attr('aria-label'), 'toggle menu');
  assert.ok(compButton.hasClass('tcon'));
  assert.ok(compButton.hasClass('tcon-menu--xbutterfly'));
});

test('it creates a menu transformicon with `is-open=true`', function(assert) {
  assert.expect(1);

  this.render(hbs`{{t-menu is-open=true}}`);
  percySnapshot(assert);

  let compButton = this.$('button');

  assert.ok(compButton.hasClass('tcon-transform'));
});

test('it creates a menu transformicon with a non-default animation `a="butterfly"`', function(assert) {
  assert.expect(2);

  this.render(hbs`{{t-menu a="arrow-360-left"}}`);

  let compButton = this.$('button');

  assert.ok(compButton.hasClass('tcon-menu--arrow'));
  assert.ok(compButton.hasClass('tcon-menu--arrow360left'));
});

test('user can click on the transformicon', function(assert) {
  assert.expect(2);

  this.render(hbs`{{t-menu id="t-menu"}}`);

  let elem = find('#t-menu');
  assert.equal(this.$(elem).hasClass('tcon-transform'), false);

  click('#t-menu');
  percySnapshot(assert);

  assert.equal(this.$(elem).hasClass('tcon-transform'), true);
});