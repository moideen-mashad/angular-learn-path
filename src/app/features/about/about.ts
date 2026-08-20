import { Component } from '@angular/core';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

interface ValueItem {
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
})
export class AboutComponent {
  header = 'About DecoLux Studio';
  subHeader = 'A team of passionate architects, designers, and curators redefining modern spatial aesthetics.';

  storyTitle = 'Our Story';
  storyParagraph1 = 'Founded in 2018, DecoLux Studio emerged from a shared belief that interior spaces are not merely containers, but canvas structures for self-expression. We began as a small boutique consultancy sourcing bespoke marble and custom cabinetry for residential clients.';
  storyParagraph2 = 'Today, we are an award-winning design agency handling luxury penthouses, flagship commercial spaces, and high-end residential estates globally. We maintain our core commitment to absolute precision, details, and sustainable high-quality materials.';

  teamHeader = 'The Creative Minds';
  teamSub = 'Meet the senior design leads steering our bespoke creative executions.';

  team: TeamMember[] = [
    {
      name: 'Julianne Vance',
      role: 'Founding Partner & Principal Designer',
      bio: 'Over 15 years overseeing luxury residential designs across Milan, London, and New York.',
      initials: 'JV'
    },
    {
      name: 'Adrian Thorne',
      role: 'Senior Architectural Lead',
      bio: 'Specialist in high-end structural spatial flows, modern lighting physics, and custom fittings.',
      initials: 'AT'
    },
    {
      name: 'Serena Sterling',
      role: 'Head of Furniture & Curation',
      bio: 'Sourcing exclusive elements from global design fairs to style spaces with character.',
      initials: 'SS'
    }
  ];

  valuesHeader = 'Our Core Values';
  values: ValueItem[] = [
    {
      title: 'Obsessive Detail',
      description: 'We believe details are not the details; they make the entire design. From grout widths to grain directions, nothing is overlooked.'
    },
    {
      title: 'Material Integrity',
      description: 'We source authentic, natural materials—hardwoods, stones, metals—that age gracefully and feel organic to touch.'
    },
    {
      title: 'Bespoke Centricity',
      description: 'Every client is unique. We avoid formulaic templates, tailoring every single layout, furniture selection, and lighting plot.'
    }
  ];
}
