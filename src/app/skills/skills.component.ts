import { Component } from '@angular/core';

interface Skill {
  id: number;
  name: string;
  icon: string;
  description: string;
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  protected readonly skills: Skill[] = [
    {
      id: 1,
      name: 'Frontend Development',
      icon: '🌐',
      description:
        'Expertise in Angular, React, and responsive web design principles',
    },
    {
      id: 2,
      name: 'Backend Development',
      icon: '⚙️',
      description: 'Experience with Node.js, Express, and RESTful API design',
    },
    {
      id: 3,
      name: 'UI/UX Design',
      icon: '🎨',
      description: 'Creating intuitive and visually appealing user interfaces',
    },
    {
      id: 4,
      name: 'Database Management',
      icon: '🗄️',
      description: 'Working with SQL and NoSQL databases including MongoDB',
    },
    {
      id: 5,
      name: 'DevOps',
      icon: '🚀',
      description:
        'CI/CD pipelines, Docker containerization, and cloud deployment',
    },
    {
      id: 6,
      name: 'Testing',
      icon: '✅',
      description:
        'Unit testing, integration testing, and test-driven development',
    },
    {
      id: 7,
      name: 'Mobile Development',
      icon: '📱',
      description: 'Building cross-platform mobile applications',
    },
    {
      id: 8,
      name: 'Version Control',
      icon: '🔄',
      description: 'Git workflow, pull requests, and collaboration',
    },
  ];
}
