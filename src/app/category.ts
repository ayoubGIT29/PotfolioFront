import { Project } from './project';

export interface Category {
  id: number;
  name: string;
  createdAt: Date;
  modifiedAt: Date;
  projects?: Project[];
}
