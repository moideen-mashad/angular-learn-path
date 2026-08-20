import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem {
  label: string;
  routerLink: string;
}

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
})
export class NavbarComponent {
  isMobileMenuOpen = signal(false);

  logoLetter = 'D';
  brandPrefix = 'Deco';
  brandSuffix = 'Lux';
  signInText = 'Sign In';
  getStartedText = 'Consult Now';

  navItems: NavItem[] = [
    { label: 'Home', routerLink: '/' },
    { label: 'About', routerLink: '/about' },
    { label: 'Services', routerLink: '/services' },
    { label: 'Careers', routerLink: '/careers' },
    { label: 'Contact', routerLink: '/contact' }
  ];

  toggleMobileMenu() {
    this.isMobileMenuOpen.set(!this.isMobileMenuOpen());
  }
}
