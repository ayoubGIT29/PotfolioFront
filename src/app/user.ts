import {Project} from "./project";

export interface User {
  id: number;
  username: string;
  imageUrl?: string;
  role?: string;
  description?: string;
  email: string;
  createdAt: Date;
  modifiedAt: Date;
  projects?: Project[];
  comments?: Comment[];
}
