import {Component, OnInit} from '@angular/core';
import {Project} from "../project";
import {User} from "../user";
import {Comment} from "../comment";
import {Technology} from "../technology";
import {Category} from "../category";
import {ProjectService} from "../project.service";
import {UserService} from "../user.service";
import {CommentService} from "../comment.service";
import {TechnologyService} from "../technology.service";
import {CategoryService} from "../category.service";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  title: string = '';
  public projects: Project[] = [];
  public users: User[] = [];
  public comments: Comment[] = [];
  public technologies: Technology[] = [];
  public categories: Category[] = [];
  public editUser!:User | null;
  public deleteUser!:User | null;
  public addUser!:User | null;
  public role:any=localStorage.getItem("role");

  constructor(
    private projectService: ProjectService,
    private userService: UserService,
    private commentService: CommentService,
    private technologyService: TechnologyService,
    private categoryService: CategoryService,
    private router: Router
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

  public navigateToProjects(userId: number | undefined):void{
    this.router.navigateByUrl(`/project/${userId}`)
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

  public onUpdateUser(user: User): void {
    this.userService.updateUser(user.id,user).subscribe(
      (response: User) => {
        console.log(response);
        this.getUsers();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteUser(userId: number | undefined): void {
    this.userService.deleteUser(userId).subscribe(
      (response: void) => {
        console.log(response);
        this.getUsers();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddUser(user: User): void {
    this.userService.addUser(user).subscribe(
      (response: User) => {
        console.log(response);
        this.getUsers();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchUsers(key: string): void {
    console.log(key);
    const results: User[] = [];

    for (const user of this.users) {
      if (
        user.username.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        user.email.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        (user.role && user.role.toLowerCase().indexOf(key.toLowerCase()) !== -1) ||
        (user.description && user.description.toLowerCase().indexOf(key.toLowerCase()) !== -1)
      ) {
        results.push(user);
      }
    }

    this.users = results;

    // If no results found or key is empty, reload all users
    if (results.length === 0 || !key) {
      this.getUsers(); // Assuming getUsers() fetches the full list of users
    }
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


  public onOpenModal(user: User | null, mode: string): void {
    const container = document.getElementById('main-container');

    // Check if container exists
    if (!container) {
      console.error('Container with id "main-container" not found.');
      return; // Exit the function if container is null
    }

    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');

    if (mode === 'add') {

      button.setAttribute('data-target', '#addUserModal');
    }
    if (mode === 'edit') {
      this.editUser = user;
      button.setAttribute('data-target', '#updateUserModal');
    }
    if (mode === 'delete') {
      this.deleteUser = user;
      button.setAttribute('data-target', '#deleteUserModal');
    }
    container.appendChild(button);
    button.click();
  }
}
