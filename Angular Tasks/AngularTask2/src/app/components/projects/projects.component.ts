import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements  OnInit{

  projects:any

  constructor(private ProjectsService : ProjectsService){}

  ngOnInit(): void {
    this.ProjectsService.getProjects().subscribe((projects)=>{
      this.projects = projects.data
    })
  }

  editName(id:any){
    this.projects[id].name="name changed"
  }

  delete(id:any){
    this.projects.splice(id,1)
  }

  search(searchKey:any){
    console.log(searchKey)
    this.projects = this.projects.filter((proj:any) => proj.name.includes(searchKey))
  }

}
