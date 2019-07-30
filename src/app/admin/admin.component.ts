import { Router } from '@angular/router';
import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  showFilter: boolean;
  opended: boolean;
  fillerNav = Array.from({ length: 20 }, (_, i) => `Nav Item ${i + 1}`);
  navs = [
    {
      name: '文章',
      opended: false,
      childMenu: [
        { name: '写文章', router: 'write' },
        { name: '文章管理', router: 'artical' },
        { name: '分类管理', router: 'category' }
      ]
    },
    { name: '用户', opended: false, childMenu: [{ name: '用户管理' }] }
  ];

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.showFilter = false;
    this.opended = true;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit() {}

  logOut(): void {
    window.localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
