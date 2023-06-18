import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-del-comp',
  templateUrl: './del-comp.component.html',
  styleUrls: ['./del-comp.component.css']
})
export class DelCompComponent implements ICellRendererAngularComp ,OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  refresh(params?: any): boolean {
    return true;
  }
  public params: any;

  agInit(params: any): void {
    this.params = params;
  }

  deleteDetail() {
    if (this.params.deleteDetail instanceof Function) {
      const params = {
      rowData: this.params.node.data,
     
    }
    
     this.params.deleteDetail(params);

   }
  }
}
