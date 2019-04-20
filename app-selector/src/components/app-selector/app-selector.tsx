import { Component } from '@stencil/core';

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


  render() {
    return (
      <div class="apps">
        {this.apps.map((app) =>
          <button onClick={() => this.selectApp(app)}>
            <div class="app">{app.ico}</div>
          </button>
        )}
      </div>
    )
  }

  selectApp = app => {
    window.dispatchEvent(new CustomEvent('appChange', {'detail': app}));
  }
}
