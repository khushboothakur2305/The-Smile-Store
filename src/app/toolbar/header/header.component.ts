// import { AuthmainService } from './../../service/auth/authmain.service';

import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() // private authmain: AuthmainService
  {}

  @Output() sidenavToggle = new EventEmitter<void>();
  isAuth = false;
  authsub: Subscription;

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  ngOnInit(): void {
    // this.authsub = this.authmain.authchanged.subscribe((authstate) => {
    //   this.isAuth = authstate;
    //  });
  }
  // ngOnDestroy(): void {
  //   this.authsub.unsubscribe();
  // }
  // logout(){
  //   this.authmain.logout();
  // }
}
