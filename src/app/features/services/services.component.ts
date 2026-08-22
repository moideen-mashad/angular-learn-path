import { Component } from '@angular/core';
import { DesignService, ProcessStep } from './models/services.model';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.component.html',
})
export class ServicesComponent {
  readonly header = 'Our Design Services';
  readonly subHeader = 'From spatial planning to bespoke furniture sourcing, we tailor every layout for absolute elegance.';

  readonly services: DesignService[] = [
    {
      title: 'Residential Architecture',
      description: 'Full-scale luxury home designs, smart home layouts, kitchen planning, and custom bedrooms.',
      price: 'Starting at $5,000',
      icon: 'RA'
    },
    {
      title: 'Commercial & Hospitality',
      description: 'Sophisticated retail spaces, boutique hotels, restaurants, and brand-driven corporate offices.',
      price: 'Custom Quote',
      icon: 'CH'
    },
    {
      title: 'Custom Furniture & Styling',
      description: 'Tailoring exclusive furniture collections, custom upholstery, drapery, and styling accessories.',
      price: 'Starting at $2,500',
      icon: 'FS'
    },
    {
      title: 'Bespoke Lighting Design',
      description: 'Custom lighting layouts, fixtures curation, automation schemes, and optical calculations.',
      price: 'Starting at $1,800',
      icon: 'LD'
    }
  ];

  readonly processHeader = 'Our Design Process';
  readonly processSub = 'A structured, transparent methodology ensuring every phase aligns with your aspirations.';

  readonly processSteps: ProcessStep[] = [
    {
      stepNumber: '01',
      title: 'Consultation & Discovery',
      description: 'We meet in-person or virtually to evaluate your space, outline design objectives, budget parameters, and review architectural files.'
    },
    {
      stepNumber: '02',
      title: 'Concept & 3D Renderings',
      description: 'We formulate initial mood boards, layout directions, custom joinery sketches, and detailed 3D color mockups.'
    },
    {
      stepNumber: '03',
      title: 'Procurement & Styling Curation',
      description: 'DecoLux manages direct sourcing from global artisans, custom manufacturing, logistics, and delivery scheduling.'
    },
    {
      stepNumber: '04',
      title: 'Installation & Reveal',
      description: 'Our senior designers oversee complete on-site setup, finishing styling details, and hand over your ready-to-live sanctuary.'
    }
  ];
}
