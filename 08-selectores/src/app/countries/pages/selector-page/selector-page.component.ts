import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interface/country.interfaces';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.css'],
})
export class SelectorPageComponent implements OnInit {
  public myForm: FormGroup = this.fb.group({
    region: ['', Validators.required],
    country: ['', Validators.required],
    borders: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private countriesServices: CountriesService
  ) {}

  ngOnInit() {
    this.onRegionChange();
  }

  get regions(): Region[] {
    return this.countriesServices.regions;
  }

  onRegionChange(): void {
    this.myForm.get('region')!.valueChanges.subscribe((region) => {
      console.log(region);
    });
  }
}