import { Component } from '@angular/core';
import { JobOpening, BenefitItem } from './models/careers.model';

@Component({
  selector: 'app-careers',
  imports: [],
  templateUrl: './careers.component.html',
})
export class CareersComponent {
  readonly header = 'Careers at DecoLux';
  readonly subHeader = 'Join a collaborative studio of creative minds shaping high-end spaces around the globe.';

  readonly cultureHeader = 'Life at DecoLux';
  readonly cultureSub = 'We believe great designs start with happy, inspired creative minds.';
  readonly cultureText = 'DecoLux is an architecture-centric environment where ideas flow freely regardless of seniority. We coordinate seasonal trips to design biennials in Venice/Milan, support continuous professional learning, and offer private health cover and premium sit-stand studio spaces.';

  readonly benefits: BenefitItem[] = [
    {
      title: 'Global Design Excursions',
      description: 'Fully sponsored trips to international design expos, furniture fairs, and architectural biennials.'
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision cover, along with local gym membership subsidies.'
    },
    {
      title: 'Professional Growth',
      description: 'Sponsored training programs, architecture certification course funding, and peer mentorship.'
    }
  ];

  readonly jobsHeader = 'Current Opportunities';
  readonly jobsSub = 'Find your path and build your career styling luxury interior designs.';

  readonly jobs: JobOpening[] = [
    {
      title: 'Senior Interior Architect',
      department: 'Residential Feature Team',
      location: 'London, UK',
      type: 'Full-Time (On-Site)',
      description: 'Lead bespoke styling projects for penthouses and estates. Direct coordination with marble and joinery workshops.'
    },
    {
      title: '3D Visualizer / Render Specialist',
      department: 'Technology & Modeling',
      location: 'New York, US',
      type: 'Full-Time (Hybrid)',
      description: 'Transform initial conceptual plans into photo-realistic Unreal Engine/3ds Max interior spaces.'
    },
    {
      title: 'Material Curation Coordinator',
      department: 'Supply & Procurement',
      location: 'Milan / Remote',
      type: 'Contract / Project-Based',
      description: 'Liaise directly with European stone quarries, fabric mills, and antique dealers to procure signature assets.'
    }
  ];
}
