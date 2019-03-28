import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'patient-selector',
  templateUrl: './patient-selector.component.html',
  styleUrls: ['./patient-selector.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class PatientSelectorComponent implements OnInit {

  public selectedPatient: any;
  public patients: any[] = [{
    id: '1',
    firstName: 'Antonio',
    lastname: 'Parolini',
  }, {
    id: '2',
    firstName: 'Guerric',
    lastname: 'Merle',
  }, {
    id: '3',
    firstName: 'Anais',
    lastname: 'Labarre',
  }, {
    id: '4',
    firstName: 'Jean Baptiste',
    lastname: 'Petit',
  }, {
    id: '5',
    firstName: 'Rémy',
    lastname: 'Trompier',
  }];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      if (params && params.patient) {
        const pat = this.patients.find((p) => p.id === params.patient);
        this.selectedPatient = pat ? pat : null;
      }
    });
  }

  public selectPatient(patient: any) {
    console.log('select patient', patient);
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { patient: patient.id },
      queryParamsHandling: 'merge',
    });
  }

}
