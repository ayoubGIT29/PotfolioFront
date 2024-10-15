import {Component, OnInit} from '@angular/core';
import {Project} from "../project";
import {User} from "../user";
import {ProjectService} from "../project.service";
import {UserService} from "../user.service";
import {CommentService} from "../comment.service";
import {TechnologyService} from "../technology.service";
import {CategoryService} from "../category.service";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-project-by-user',
  templateUrl: './project-by-user.component.html',
  styleUrl: './project-by-user.component.css'
})
export class ProjectByUserComponent implements OnInit{
  public projects: Project[] = [];
  public users: User[] = [];
  public user: any|undefined;
  public project:any|undefined;

  constructor(
    private projectService: ProjectService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getUserById(1);  // Get User with ID 3
    this.getProjectById(1);  // Get Project with ID 1
  }

  public getUserById(userId: number): void {
    this.userService.getUsers().subscribe(
      (response: User[]) => {
        this.user = response.find(user => user.id === userId);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getProjectById(projectId: number): void {
    this.projectService.getProjects().subscribe(
      (response: Project[]) => {
        this.project = response.find(project => project.id === projectId);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public getUsers(): void {
    this.userService.getUsers().subscribe(
      (response: User[]) => {
        this.users = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getProjects(): void {
    this.projectService.getProjects().subscribe(
      (response: Project[]) => {
        this.projects = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
