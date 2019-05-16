import { ModalController } from '@ionic/angular';
import { LocationService } from './../../../../core/services/location.service';
import { MapsAPILoader } from '@agm/core';
import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/core/services/log.service';
import { WorkPlaceDTO } from 'src/app/api/models';

@Component({
  selector: 'app-add-workplace-modal',
  templateUrl: './add-workplace-modal.component.html',
  styleUrls: ['./add-workplace-modal.component.scss'],
})
export class AddWorkplaceModalComponent implements OnInit {

  searchTerm: string;
  place: any;
  values: any;
  clinicName: string;

  workPlace: WorkPlaceDTO = {};

  constructor(
    private locationService: LocationService,
    private mapsAPILoader: MapsAPILoader,
    private modalController: ModalController,
    private log: LogService
  ) { }

  ngOnInit() {
    if(this.workPlace.id !== undefined) {

        this.searchTerm = this.workPlace.locationName;
        this.clinicName = this.workPlace.name;
    }
  }

  select(place: any) {
    console.log(place);
    this.place = place;
    this.searchTerm = this.place.description;
    this.values = undefined;
  }

  onSearch() {

    this.log.log('Starting Search');

    this.values = [];

    if (this.searchTerm === ' ' || this.searchTerm === null) {
      return;
    }

    this.locationService.getPredictions(this.searchTerm).subscribe(res => {
      this.values = res;
    });
  }

  cancel() {
    this.modalController.dismiss();
  }

  dismiss() {

    if(this.workPlace.id === undefined) {
      const workplace : WorkPlaceDTO= {}
      workplace.name = this.clinicName;
      workplace.locationName = this.searchTerm;
      console.log(workplace);
      this.locationService.geocodeAddress()
      .then(geocoder => {
          geocoder.geocode({placeId: this.place.place_id}, (results, status) => {
          if (status !== 'OK') {
            console.log('Geocoder failed due to: ' + status);
            return;
          }
    
          let latlon = [results[0].geometry.location.lat(), results[0].geometry.location.lng()];
          console.log('Lat is inside geo ' + results[0].geometry.location.lat());
          console.log('Lon is inside geo ' + results[0].geometry.location.lng());

          workplace.location = latlon.toString();
          console.log('Workplace' , workplace);
          this.modalController.dismiss(workplace);
          
          });
      })
    }
  }

}
