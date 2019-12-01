import Component from '@glimmer/component';
import { setComponentTemplate } from '@ember/component';
import { hbs } from 'ember-cli-htmlbars';

/**
  Scroll Transformicon

  ```hbs
    <TScroll />
  ```

  @class TScrollComponent
  @public
*/
class TScrollComponent extends Component {}

export default setComponentTemplate(
  hbs`
  <span
    aria-label="scroll"
    aria-hidden="true"
    class="tcon-indicator"
    ...attributes
  >
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      class="tcon-svgchevron"
      viewBox="0 0 30 36"
    >
      <path class="a3" d="M0,0l15,16L30,0"></path>
      <path class="a2" d="M0,10l15,16l15-16"></path>
      <path class="a1" d="M0,20l15,16l15-16"></path>
    </svg>
  </span>
  `,
  TScrollComponent
);
