import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @Output() closesidenav = new EventEmitter<void>();

  isAuth = false;

  onclose() {
    this.closesidenav.emit();
  }
  ngOnInit(): void {}
}
