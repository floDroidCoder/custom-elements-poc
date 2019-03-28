import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-container',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public patientId: string;
  public app: string;

  constructor(
    private route: ActivatedRoute,
  ) {
    window.addEventListener('hashchange', this.hashChange.bind(this), false);
  }

  public ngOnInit() {
    this.route.queryParams
      .pipe(filter((params) => params.patient || params.app))
      .subscribe((params) => {
        console.log('selected patient changed with angular router');
        this.patientId = params.patient;
        this.app = params.app;
      });
  }

  private hashChange() {
    console.log('selected patient changed with eventListner');
  }
}
