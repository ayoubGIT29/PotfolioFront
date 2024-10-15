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
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


}
