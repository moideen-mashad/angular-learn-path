import { Component, signal } from '@angular/core';

interface NavItem {
  label: string;
  href: string;
}

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
})
export class NavbarComponent {
  isMobileMenuOpen = signal(false);

  logoLetter = 'A';
  brandPrefix = 'Angular';
  brandSuffix = 'Craft';
  signInText = 'Sign In';
  getStartedText = 'Get Started';

  navItems: NavItem[] = [
    { label: 'Home', href: '#' },
    { label: 'Features', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'About', href: '#' },
  ];

  toggleMobileMenu() {
    this.isMobileMenuOpen.set(!this.isMobileMenuOpen());
  }
}
