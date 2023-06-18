import { HttpClient } from '@angular/common/http';
import { Component, OnInit, QueryList, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { AggridserviceService } from '../services/aggridservice.service';
import { NotifierService } from '../services/notifier.service';
import { UpdatedetaildialogComponent } from '../updatedetaildialog/updatedetaildialog.component';
import { DelCompComponent } from './render/del-comp/del-comp.component';
import { EditCompComponent } from './render/edit-comp/edit-comp.component';
import { UserModel } from './user';

@Component({
  selector: 'app-aggridform',
  templateUrl: './aggridform.component.html',
  styleUrls: ['./aggridform.component.css']
})
export class AggridformComponent implements OnInit {

  UserData: any = [];
  userform!: FormGroup;
  UserModelObj: UserModel = new UserModel();
  formDirective!: FormGroupDirective;
  public columnDefs: ColDef[] = [
    { field: 'name'},
    { field: 'email'},
    { field: 'mobile' },
    {field:'address'},
    {
     
      field: 'edit',
      cellRenderer: EditCompComponent,
      cellRendererParams: {
        editDetail: this.editParamsValue.bind(this)
      }
    },
    {
     
      field: 'delete',
      cellRenderer: DelCompComponent,
      cellRendererParams: {
        deleteDetail: this.deleteParamsValue.bind(this)
      }
    },
  ];
 
  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };
  
 
  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  rowData: any;
  // @ViewChild('dialogRef') dialogref!: TemplateRef<any>;
  @ViewChild('deleteDialog') delDialog!: TemplateRef<any>
  gridApi: any;
  edit!: boolean;
  submit!: boolean;
  id: any;
  ParamsVal: any;
  delid: any;
  name: any;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private userapi:AggridserviceService,
    private toast:NotifierService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.submit=true;
    this.getUser();
    this.userform = this.fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      mobile: new FormControl('', [
        Validators.required,
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
      ]),
      address: new FormControl(''),
    });
  }
 
  addUser(formDirective : FormGroupDirective) {
    
    if (this.userform.valid) {
    this.UserModelObj = this.userform.value;
    this.formDirective = formDirective;
    this.userapi.Adduser(this.UserModelObj).subscribe(
      (res) => {
        if (this.userform.valid) {
          console.log(res);
          this.toast.Showsuccess('User Added Successfully');
         this.formDirective.resetForm();
         this.userform.reset();
        this.getUser();
        }
      },
      (err) => {
        this.toast.Showerror('Something went wrong');
        console.log(err);
      }
    );
  }}

  
  // load data from sever
  getUser() {
    this.userapi
    .Getuser().subscribe((res) => (this.rowData = res),);
    console.log(this.rowData)
  }
 
  //  consuming Grid Event
  onCellClicked( e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }
  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }
  editParamsValue(e: any) {
    // this.dialog.open(this.dialogref);
    this.edit=true;
    this.submit=false;
    this.userform.controls['name'].setValue(e.rowData.name) 
    this.userform.controls['email'].setValue(e.rowData.email)   
    this.userform.controls['mobile'].setValue(e.rowData.mobile)    
    this.userform.controls['address'].setValue(e.rowData.address)  
    this.id=e.rowData.id 
    console.log(e.rowData.id);
  }
 
  closeDialog(){
    this.dialog.closeAll()
  }

  updateUser(formDirective : FormGroupDirective) {
    console.log(this.id)
    if (this.userform.valid){
    this.formDirective = formDirective;
    this.userapi.putUser(this.userform.value, this.id).subscribe(
      (res) => {
        if(this.userform.valid){
        console.log(res); 
        this.toast.Showsuccess('User Updated succesfully');
       this.getUser();
        this.userform.reset(); 
      }},
      (err) => {
        this.toast.Showerror('Something went wrong');
        console.log(err);
      }
    
    );
    }
  }
  deleteParamsValue(e: any) {
    this.ParamsVal=e
    console.log(e)
    this.dialog.open(this.delDialog)
    this.name=e.rowData.name;
  }
  confirmDelete(e: any) {
    console.log(e.rowData.id)
    this.userapi.deleteUser(e.rowData.id).subscribe((res) => {
      console.log(res);
      this.toast.Showsuccess('User Deleted Successfully');
      this.getUser();
    },
    (err) => {
      this.toast.Showerror('Something went wrong');
      console.log(err);
    });
  }
  downloadCSV() {
    this.gridApi.exportDataAsCsv();
  }
  }
  
 
