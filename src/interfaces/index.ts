export interface IRoute {
  name: string;
  component: () => void;
}

export interface Training {
  id: number;
  name: string;
  photo: string
  participants: string[];
  goal: string;
  content: string[];
  additional: string;
  benefit: string[];
  days: string;
  people: string;
  place: string[];
  suggestions: string[];
  category: string;
  link: string;
  price: number;
}

export interface Trainer {
  id: number;
  photo: string;
  name: string;
  description: string;
}

export interface Schedule {
  month: number;
  year: number;
  trainings: (string | string[])[];
}