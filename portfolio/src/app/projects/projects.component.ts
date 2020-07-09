import { Component, OnInit } from '@angular/core';
import { Project } from './projects.model';
import { ProjectService } from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  
  constructor(private projService: ProjectService) { }

  ngOnInit(): void {
    this.projects = this.projService.getProjects()
  }
}