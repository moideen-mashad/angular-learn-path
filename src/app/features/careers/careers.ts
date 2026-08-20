import { Component } from '@angular/core';

interface JobOpening {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

interface BenefitItem {
  title: string;
  description: string;
}

@Component({
  selector: 'app-careers',
  imports: [],
  templateUrl: './careers.html',
})
export class CareersComponent {
  header = 'Careers at DecoLux';
  subHeader = 'Join a collaborative studio of creative minds shaping high-end spaces around the globe.';

  cultureHeader = 'Life at DecoLux';
  cultureSub = 'We believe great designs start with happy, inspired creative minds.';
  cultureText = 'DecoLux is an architecture-centric environment where ideas flow freely regardless of seniority. We coordinate seasonal trips to design biennials in Venice/Milan, support continuous professional learning, and offer private health cover and premium sit-stand studio spaces.';

  benefits: BenefitItem[] = [
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

  jobsHeader = 'Current Opportunities';
  jobsSub = 'Find your path and build your career styling luxury interior designs.';

  jobs: JobOpening[] = [
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
