import { Component, OnInit } from '@angular/core';
import { Datetime , NavController, NavParams} from '@ionic/angular';
import { CaptureProductionService } from '../CaptureProduction/capture-production.service';
import { ProductionDetailsPage } from '../ProductionDetails/production-details/production-details.page';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  public eggs: Array<{ NonBrokenEggs: Number; CageDefects: Number; SoftShellDefects: Number;
                       DateCreated: Datetime; DateModified: Datetime; Total: string; }> = [];
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(private captureProductionService: CaptureProductionService) {
    const eggs = this.captureProductionService.getEggs();
    for (const egg of eggs) {
      this.eggs.push({
        NonBrokenEggs: egg.NonBrokenEggs,
        CageDefects: egg.CageDefects,
        SoftShellDefects: egg.SoftShellDefects,
        DateCreated: egg.DateCreated,
        DateModified: egg.DateModified,
        // tslint:disable-next-line:radix
        Total: 'Total: ' + (parseInt(egg.NonBrokenEggs) + parseInt(egg.CageDefects) + parseInt(egg.SoftShellDefects))
      });
    }
  }

  ngOnInit() {
  }

  public GetEggs() {
    const eggs = this.captureProductionService.getEggs();
    for (const egg of eggs) {
      this.eggs.push({
        NonBrokenEggs: egg.NonBrokenEggs,
        CageDefects: egg.CageDefects,
        SoftShellDefects: egg.SoftShellDefects,
        DateCreated: egg.DateCreated,
        DateModified: egg.DateModified,
        Total: egg.NonBrokenEggs + egg.CageDefects + egg.SoftShellDefects
      });
    }
  }

  itemTapped(event, item) {
    // this.navCtrl.navigateRoot(ProductionDetails);
  }
}
