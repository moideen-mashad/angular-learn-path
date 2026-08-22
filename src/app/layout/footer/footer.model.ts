export interface FooterLink {
  label: string;
  routerLink: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  label: string;
  href: string;
  type: 'fill' | 'stroke';
  d: string;
}
