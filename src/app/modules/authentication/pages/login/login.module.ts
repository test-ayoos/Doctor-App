import { CoreModule } from './../../../../core/core.module';
import { ComponentsModule } from './../../components/components.module';
import { AboutComponent } from './../../components/about/about.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular/';
import { LoginPage } from './login.page';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ComponentsModule,
    CoreModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginPage],
  entryComponents: [AboutComponent]
})
export class LoginPageModule {}
