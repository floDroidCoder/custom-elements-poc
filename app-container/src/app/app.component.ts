import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-container',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public selectedPatient: any;
  public selectedApp: any;

  constructor(private router: Router) {
    window.addEventListener('patientChange', this.patientChange, false);
    window.addEventListener('appChange', this.appChange, false);
  }

  public ngOnInit() {
  }

  private patientChange = event => {
    this.selectedPatient = event.detail;
  };

  private appChange = event => {
    this.selectedApp = event.detail;
  };

  public navigateTo = path => this.router.navigate(path, {
    queryParamsHandling: 'merge',
  })
}
