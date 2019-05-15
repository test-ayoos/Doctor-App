import { AboutComponent } from './components/about/about.component';
import { AuthenticationPageRoutingModule } from './authentication.router.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    AuthenticationPageRoutingModule
  ],
  declarations: []
})
export class AuthenticationModule {}
