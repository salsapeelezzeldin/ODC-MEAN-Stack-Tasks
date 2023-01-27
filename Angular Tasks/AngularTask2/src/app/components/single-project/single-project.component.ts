import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.css']
})
export class SingleProjectComponent {

  singleProj : any

  constructor(private activated : ActivatedRoute , private ProjectsService : ProjectsService){

    let projId = this.activated.snapshot.paramMap.get('projectId')
    this.ProjectsService.getSingleProject(projId).subscribe(project=>{
      this.singleProj = project.data
    })
  }
}
