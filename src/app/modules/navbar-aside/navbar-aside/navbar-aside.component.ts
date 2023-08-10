import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-navbar-aside',
  templateUrl: './navbar-aside.component.html',
  styleUrls: ['./navbar-aside.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarAsideComponent {
  public isMenuOpen: Boolean;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen
  }
}
