import { Component } from '@angular/core';

interface StatItem {
  value: string;
  label: string;
  colorClass: string;
}

@Component({
  selector: 'app-intro',
  imports: [],
  templateUrl: './intro.html',
})
export class IntroComponent {
  badgeText = 'Deploy to Vercel & Netlify in 1-Click';
  titlePrefix = 'Build Standalone Apps with';
  titleHighlight = 'Modern Angular';
  description = 'Unlock maximum performance, tree-shakeable bundles, and direct reactivity using Angular Signals. Streamline your frontend development with zero-config standalone components.';
  primaryCtaText = 'Get Started Free';
  secondaryCtaText = 'Read Documentation';

  stats: StatItem[] = [
    { value: '10x', label: 'Faster Hydration', colorClass: 'text-indigo-600 dark:text-indigo-400' },
    { value: '45%', label: 'Lighter Bundle', colorClass: 'text-purple-600 dark:text-purple-400' },
    { value: '99.9%', label: 'Uptime Score', colorClass: 'text-pink-600 dark:text-pink-400' }
  ];

  codeFilename = 'app-intro.component.ts';
}
