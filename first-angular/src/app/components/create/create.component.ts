import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/Project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService]
})
export class CreateComponent implements OnInit {

  public title: string
  public project: Project
  public status: string

  constructor(
    private _projectService: ProjectService
  ) { 
    this.title = "Crear proyecto"
    this.project = new Project('', '', '', '', 2021, '', '')
    this.status = ''
  }

  ngOnInit(): void {
  }

  onSubmit(form: any) {

    this._projectService.saveProject(this.project).subscribe(
      response => {
        if(response.project) {
          this.status = 'success'
          form.reset()
        } else {
          this.status = 'failed'
        }
        console.log(response);
      },
      err => {
        console.log(<any>err);
      }
    )
  }
}
