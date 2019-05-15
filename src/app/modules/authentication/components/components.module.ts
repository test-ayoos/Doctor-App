import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular/';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ],
  exports: [AboutComponent],
  declarations: [AboutComponent],
})
export class ComponentsModule { }
