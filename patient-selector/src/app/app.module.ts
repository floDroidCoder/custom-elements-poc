import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { RouterModule } from '@angular/router';

import { PatientSelectorComponent } from './patient-selector/patient-selector.component';

@NgModule({
  declarations: [
    PatientSelectorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{ path: '', component: PatientSelectorComponent}]),
  ],
  bootstrap: [
    PatientSelectorComponent,
  ],
  providers: [],
  entryComponents: [
    PatientSelectorComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  public ngDoBootstrap() {
    const customButton = createCustomElement(PatientSelectorComponent, { injector: this.injector });
    customElements.define('patient-selector', customButton);
  }
}
