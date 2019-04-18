import { LocationService } from './../../service/location/location.service';
import { Component, OnInit, NgZone } from '@angular/core';
import {MapsAPILoader} from '@agm/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.page.html',
  styleUrls: ['./clinic.page.scss'],
})
export class ClinicPage implements OnInit {

  searchTerm: string;
  placeId: string;
  values: any;
  place: any;
  clinicName: any;
  private geocoder: any;
  public latlon: number[];
  obj: any;

  constructor(private locationService: LocationService,
              private mapsAPILoader: MapsAPILoader,
              private modalController: ModalController,
              private ngZone: NgZone  ) { }

  ngOnInit() {


  }

  onSearch() {

    this.values = [];

    if(this.searchTerm === '' || this.searchTerm === null) { return ; }

    this.locationService.getPredictions(this.searchTerm)
    .subscribe(
      res => {
        this.values = res;
      }
    );
  }

  select(place: any) {

    this.place = place;
    this.searchTerm = this.place.description;
    this.values = undefined;
  }

}
