import { Component, OnInit } from '@angular/core';
import { Depart } from 'src/app/services/depart';
import { DepartmentsService } from 'src/app/services/departments.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {
  constructor(private depart: DepartmentsService) {}
  public gDepart: Depart[];
  ngOnInit() {
    this.getDepartmentsFromService();
  }
  getDepartmentsFromService(): void {
    this.gDepart = this.depart.getDepart();
  }
}
