import { Component, OnInit } from '@angular/core';
import { Datetime } from '@ionic/angular';
import { CaptureProductionService } from '../CaptureProduction/capture-production.service';
import { forEach } from '@angular/router/src/utils/collection';

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
    // for (let i = 1; i < 11; i++) {
    //   this.items.push({
    //     title: 'Item ' + i,
    //     note: 'This is item #' + i,
    //     icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    //   });
    // }
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
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
