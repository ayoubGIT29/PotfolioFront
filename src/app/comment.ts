import { Project } from './project';
import { User } from './user';

export interface Comment {
  id: number;
  content: string;
  createdAt: Date;
  modifiedAt: Date;
  project: Project;
  user: User;
}
