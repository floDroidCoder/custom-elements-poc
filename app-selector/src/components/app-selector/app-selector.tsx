import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'app-selector',
  styleUrl: 'app-selector.css',
  shadow: true
})
export class AppSelector {

  public apps = [{
    ico: 'D',
    label: 'DrugEditor',
    path: 'drugeditor'
  }, {
    ico: 'EC3',
    label: 'Echelles cliniques',
    path: 'scale'
  }, {
    ico: 'F',
    label: 'Formulaires',
    path: 'forms'
  }];

  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  render() {
    return (
      <div class="apps">
        {this.apps.map((app) =>
          <div class="app">{app.ico}</div>
        )}
      </div>
    )
  }
}
