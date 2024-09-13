import { Project } from './project';

export interface Technology {
  id: number;
  name: string;
  createdAt: Date;
  modifiedAt: Date;
  projects?: Project[];
}
