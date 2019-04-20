import {AfterViewInit, Component, OnInit, ViewEncapsulation} from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'patient-selector',
  templateUrl: './patient-selector.component.html',
  styleUrls: ['./patient-selector.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class PatientSelectorComponent implements OnInit, AfterViewInit {
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

  }

  ngAfterViewInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      const patientIdFromUrl = _.get(params, 'patient');
      if (patientIdFromUrl) {
        const pat = this.patients.find((p) => p.id === patientIdFromUrl);
        this.selectedPatient = pat || null;

        // Wait until app-container is loaded
        setTimeout(() => this.dispatchPatient(this.selectedPatient), 1000);
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

    this.dispatchPatient(patient);
  }

  private dispatchPatient =
      patient => window.dispatchEvent(new CustomEvent('patientChange', {'detail': patient}));
}
