import { Component, OnInit, Injectable } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CaptureProductionService } from '../capture-production.service';
// import { AnyAaaaRecord } from 'dns';
import { Datetime } from '@ionic/angular';

@Component({
  selector: 'app-capture-production',
  templateUrl: './capture-production.page.html',
  styleUrls: ['./capture-production.page.scss'],
})

@Injectable()
export class CaptureProductionPage implements OnInit {

  private viewModel: FormGroup;
  private eggs: any;

  constructor(private captureProductionService: CaptureProductionService, private formBuilder: FormBuilder) {
    this.viewModel = this.formBuilder.group({
      NonBrokenEggs:    ['', Validators.required],
      CageDefects:      ['', !Validators.required],
      SoftShellDefects: ['', !Validators.required]
    });
   }

   ionViewDidLoad() {
    this.captureProductionService.getEggs().then((data) => {
      this.eggs = data;
    });
  }
  ngOnInit() {
  }

  public Capture() {
    this.viewModel.value.DateCreated = new Date().toISOString();
    const response = this.captureProductionService.Capture(this.viewModel.value);
    // const eggs = this.captureProductionService.getEggs().value;
    // .subscribe(res => {
    //   const id = res['id'];
    //   console.log('Success');
    // }, (err) => {
    //   console.log(err);
    // });
  }
}
