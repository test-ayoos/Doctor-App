import { NavController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() profileImage;
  @Input() profileImageType;
  @Input() profilePage: string;

  @Input() notificationPage: string;

  constructor(
    private navController: NavController
  ) { }

  ngOnInit() {}

  navigate(path: string) {
    this.navController.navigateForward(path);
  }
}
