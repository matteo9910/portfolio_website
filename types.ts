// Fix: Import React to make React.ReactNode available
import React from 'react';

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  fullContent: string;
  techStack: string[];
  githubUrl: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
}

export interface Skill {
  name: string;
  icon?: React.ReactNode;
  category: 'Core' | 'Tech' | 'Soft';
}