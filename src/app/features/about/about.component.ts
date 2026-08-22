import { Component } from '@angular/core';
import { TeamMember, ValueItem } from './models/about.model';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  readonly header = 'About DecoLux Studio';
  readonly subHeader = 'A team of passionate architects, designers, and curators redefining modern spatial aesthetics.';

  readonly storyTitle = 'Our Story';
  readonly storyParagraph1 = 'Founded in 2018, DecoLux Studio emerged from a shared belief that interior spaces are not merely containers, but canvas structures for self-expression. We began as a small boutique consultancy sourcing bespoke marble and custom cabinetry for residential clients.';
  readonly storyParagraph2 = 'Today, we are an award-winning design agency handling luxury penthouses, flagship commercial spaces, and high-end residential estates globally. We maintain our core commitment to absolute precision, details, and sustainable high-quality materials.';

  readonly teamHeader = 'The Creative Minds';
  readonly teamSub = 'Meet the senior design leads steering our bespoke creative executions.';

  readonly team: TeamMember[] = [
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

  readonly valuesHeader = 'Our Core Values';
  readonly values: ValueItem[] = [
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
