import { ProfileReviewComponent } from './../../components/profile-review/profile-review.component';
import { ProfileHeaderComponent } from './../../components/profile-header/profile-header.component';
import { ProfileDetailsComponent } from './../../components/profile-details/profile-details.component';
import { ProfileImgComponent } from './../../components/profile-img/profile-img.component';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProfilePage } from './profile.page';
import { CoreModule } from 'src/app/core/core.module';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoreModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfilePage],
  entryComponents: [ProfileImgComponent , ProfileDetailsComponent , ProfileHeaderComponent , ProfileReviewComponent]
})
export class ProfilePageModule {}
