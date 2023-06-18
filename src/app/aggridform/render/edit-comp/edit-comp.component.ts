import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-edit-comp',
  templateUrl: './edit-comp.component.html',
  styleUrls: ['./edit-comp.component.css']
})
export class EditCompComponent implements ICellRendererAngularComp,OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  refresh(params?: any): boolean {
    return true;
  }
  private params: any;

  agInit(params: any): void {
    this.params = params;
  }

  editDetail() {
    if (this.params.editDetail instanceof Function) {
       const params = {
       rowData: this.params.node.data,
       params:this.params
     }
      // console.log(params)
      this.params.editDetail(params);

    }
  }
}
