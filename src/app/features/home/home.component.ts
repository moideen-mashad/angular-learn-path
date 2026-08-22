import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BrandPillar, Testimonial } from './models/home.model';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  readonly badgeText = 'Award-Winning Interior Architecture';
  readonly heroTitlePrefix = 'Spaces Crafted to';
  readonly heroTitleHighlight = 'Inspire Living';
  readonly heroDescription = 'DecoLux Studio designs bespoke residential and commercial environments that merge absolute functionality with timeless, sophisticated aesthetics.';
  readonly primaryCta = 'Explore Portfolio';
  readonly secondaryCta = 'Book Consultation';

  readonly pillarsHeader = 'Our Design Philosophy';
  readonly pillarsSub = 'How we transform blank canvases into exquisite architectural masterpieces.';

  readonly pillars: BrandPillar[] = [
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

  readonly testimonialHeader = 'Client Experiences';
  readonly testimonialSub = 'Read what our clients say about their new custom residential and commercial spaces.';
  
  readonly testimonials: Testimonial[] = [
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
