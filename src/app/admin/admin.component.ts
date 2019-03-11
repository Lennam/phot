import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  showFilter: boolean;
  fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.showFilter = false;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit() {}

  logOut(): void {
    console.log('logOut');
  }
}
