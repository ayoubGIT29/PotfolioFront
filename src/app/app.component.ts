import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ProjectService } from './project.service';
import { UserService } from './user.service';
import { CommentService } from './comment.service';
import { TechnologyService } from './technology.service';
import { CategoryService } from './category.service';
import { Project } from './project';
import { User } from './user';
import { Comment } from './comment';
import { Technology } from './technology';
import { Category } from './category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = '';
  public projects: Project[] = [];
  public users: User[] = [];
  public comments: Comment[] = [];
  public technologies: Technology[] = [];
  public categories: Category[] = [];

  constructor(
    private projectService: ProjectService,
    private userService: UserService,
    private commentService: CommentService,
    private technologyService: TechnologyService,
    private categoryService: CategoryService
  ) {}

  ngOnInit() {
    this.getProjects();
    this.getUsers();
    this.getComments();
    this.getTechnologies();
    this.getCategories();
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

  public getComments(): void {
    this.commentService.getComments().subscribe(
      (response: Comment[]) => {
        this.comments = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getTechnologies(): void {
    this.technologyService.getTechnologies().subscribe(
      (response: Technology[]) => {
        this.technologies = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getCategories(): void {
    this.categoryService.getCategories().subscribe(
      (response: Category[]) => {
        this.categories = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }



}
