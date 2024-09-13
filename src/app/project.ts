import {User} from "./user";
import {Technology} from "./technology";
import {Category} from "./category";

export interface Project {
  id: number;
  title: string;
  description?: string;
  createdAt: Date;
  modifiedAt: Date;
  user: User;
  categories: Category[];
  technologies: Technology[];
  comments?: Comment[];
}
