import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CaptureProductionPage } from '../../../CaptureProduction/capture-production/capture-production.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [CaptureProductionPage],
  declarations: [CaptureProductionPage]
})
export class SharedModule { }
