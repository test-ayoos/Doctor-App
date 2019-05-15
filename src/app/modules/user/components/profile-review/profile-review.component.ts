import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-review',
  templateUrl: './profile-review.component.html',
  styleUrls: ['./profile-review.component.scss'],
})
export class ProfileReviewComponent implements OnInit {

  @Input() totalReview: number;
  @Input() totalRating: number;
  @Input() totalConsultation: number;

  constructor() { }

  ngOnInit() {}

}
