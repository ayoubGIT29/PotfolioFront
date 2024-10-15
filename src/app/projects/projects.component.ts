import { Component, OnInit } from '@angular/core';
import { Project } from "../project";
import { ProjectService } from "../project.service";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']  // Corrected to 'styleUrls' instead of 'styleUrl'
})
export class ProjectsComponent implements OnInit {
  public projects: any = [];
  public comments: Comment[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.getProjects();
  }

  public getProjects(): void {
    this.projectService.getProjects().subscribe(
      (response: any[]) => {
        this.projects = response;
        //this.comments=this.projects;
        console.log(this.projects); // Add this to verify if comments are part of the projects
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchProjects(key: string): void {
    console.log(key);
    const results: Project[] = [];

    for (const project of this.projects) {
      if (
        project.title.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        (project.description && project.description.toLowerCase().indexOf(key.toLowerCase()) !== -1) ||
        project.user.username.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(project);
      }
    }

    this.projects = results;

    // If no results found or key is empty, reload all projects
    if (results.length === 0 || !key) {
      alert("PROJECT NOT FOUND")
      this.getProjects(); // Assuming getProjects() fetches the full list of projects
    }
  }


}
