import { WorkPlaceDTO } from "src/app/api/models";
import { LocationService } from "./../../service/location/location.service";
import { Component, OnInit, NgZone } from "@angular/core";
import { MapsAPILoader } from "@agm/core";
import { ModalController, LoadingController } from "@ionic/angular";
import { CommandResourceService } from "src/app/api/services";

@Component({
  selector: "app-clinic",
  templateUrl: "./clinic.page.html",
  styleUrls: ["./clinic.page.scss"]
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

  doctorId: number;

  uid: number = null;

  workPlace: WorkPlaceDTO = {};

  loading: HTMLIonLoadingElement;

  constructor(
    private locationService: LocationService,
    private mapsAPILoader: MapsAPILoader,
    private modalController: ModalController,
    private loadingController: LoadingController,
    private commandResourceService: CommandResourceService,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    this.workPlace.doctorId = this.doctorId;
    this.workPlace.id = this.uid;
    this.setUpLoader();
  }

  async setUpLoader() {
    this.loading = await this.loadingController.create({
      spinner: "dots",
      translucent: true,
      cssClass: "loading"
    });
  }

  addUpdateWorkPlace() {
    if (this.workPlace.id !== undefined) {
      this.updateWorkPlace();
    } else {
      this.postWorkPlace();
    }
  }

  postWorkPlace() {
    this.loading.present();
    console.log("Creating Workplace", this.workPlace);
    this.workPlace.location = this.place.description;
    this.workPlace.name = this.clinicName;
    this.commandResourceService
      .createWorkPlaceUsingPOST(this.workPlace)
      .subscribe(result => {
        console.log(result);
        this.loading.dismiss();
        this.dismiss();
      });
  }

  updateWorkPlace() {
    this.loading.present();
    console.log("Updating Workplace", this.workPlace);
    this.commandResourceService
      .updateWorkPlaceUsingPUT(this.workPlace)
      .subscribe(result => {
        console.log(result);
        this.loading.dismiss();
        this.dismiss();
      });
  }

  onSearch() {
    console.log("Searching for ", this.searchTerm);
    this.values = [];

    if (this.searchTerm === "" || this.searchTerm === null) {
      return;
    }

    this.locationService.getPredictions(this.searchTerm).subscribe(res => {
      this.values = res;
    });
  }

  select(place: any) {
    this.place = place;
    this.searchTerm = this.place.description;
    this.values = undefined;
  }

  dismiss() {
    this.modalController.dismiss();
  }
}
