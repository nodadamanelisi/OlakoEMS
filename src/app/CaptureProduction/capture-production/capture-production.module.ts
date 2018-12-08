import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule} from '../../Shared/Modules/shared/shared.module';

import { IonicModule } from '@ionic/angular';

import { CaptureProductionPage } from './capture-production.page';

const routes: Routes = [
  {
    path: '',
    component: CaptureProductionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: []
})
export class CaptureProductionPageModule {}
