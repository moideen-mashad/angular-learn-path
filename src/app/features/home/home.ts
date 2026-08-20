import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface BrandPillar {
  title: string;
  description: string;
  icon: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
})
export class HomeComponent {
  badgeText = 'Award-Winning Interior Architecture';
  heroTitlePrefix = 'Spaces Crafted to';
  heroTitleHighlight = 'Inspire Living';
  heroDescription = 'DecoLux Studio designs bespoke residential and commercial environments that merge absolute functionality with timeless, sophisticated aesthetics.';
  primaryCta = 'Explore Portfolio';
  secondaryCta = 'Book Consultation';

  pillarsHeader = 'Our Design Philosophy';
  pillarsSub = 'How we transform blank canvases into exquisite architectural masterpieces.';

  pillars: BrandPillar[] = [
    {
      title: 'Bespoke Craftsmanship',
      description: 'Custom cabinetry, handpicked fabrics, and signature furniture curations sourced globally.',
      icon: 'BC'
    },
    {
      title: 'Spatial Harmony',
      description: 'Engineering layout flows that optimize movement, light exposure, and everyday utility.',
      icon: 'SH'
    },
    {
      title: 'Timeless Luxury',
      description: 'Avoiding fleeting trends to build spaces with refined materials that grow more beautiful with age.',
      icon: 'TL'
    }
  ];

  testimonialHeader = 'Client Experiences';
  testimonialSub = 'Read what our clients say about their new custom residential and commercial spaces.';
  
  testimonials: Testimonial[] = [
    {
      quote: 'DecoLux transformed our penthouses into a breathtaking sanctuary. Their attention to custom wood detailing is unmatched.',
      author: 'Eleanor Vance',
      role: 'CEO, Horizon Ventures'
    },
    {
      quote: 'The commercial design for our flagship office has boosted employee morale and left our visiting clients completely awed.',
      author: 'Marcus Sterling',
      role: 'Founding Partner, Sterling Law'
    }
  ];
}
