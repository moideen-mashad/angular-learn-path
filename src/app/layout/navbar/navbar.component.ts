import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavItem } from './navbar.model';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  readonly isMobileMenuOpen = signal(false);

  readonly logoLetter = 'D';
  readonly brandPrefix = 'Deco';
  readonly brandSuffix = 'Lux';
  readonly signInText = 'Sign In';
  readonly getStartedText = 'Consult Now';

  readonly navItems: NavItem[] = [
    { label: 'Home', routerLink: '/' },
    { label: 'About', routerLink: '/about' },
    { label: 'Services', routerLink: '/services' },
    { label: 'Careers', routerLink: '/careers' },
    { label: 'Contact', routerLink: '/contact' }
  ];

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((open) => !open);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }
}
