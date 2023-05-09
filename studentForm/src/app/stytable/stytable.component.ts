
import { Component, OnDestroy, OnInit,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { StudentService } from '../services/student.service';
import { AddOREditComponent } from '../add-oredit/add-oredit.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import { TudComponent } from './tud/tud.component';

@Component({
  selector: 'app-stytable',
  templateUrl: './stytable.component.html',
  styleUrls: ['./stytable.component.scss'],
  
})
export class StytableComponent implements OnInit,OnDestroy {
  title = 'studentForm';
  displayedColumns: string[] = ['id', 'name', 'gender', 'doj','player-roll','jersey-number','email','action'];
  dataSource!: MatTableDataSource<any>;
  public done=false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _matdilouge:MatDialog,private _studentService:StudentService,public snackBar: MatSnackBar){}

  ngOnInit(): void {
    this.getStudentListData();
    

  }

  ngOnDestroy(): void {
    
  }

  editoraddmethod(){
    const dilogref=this._matdilouge.open(AddOREditComponent);
    dilogref.afterClosed().subscribe({
      next:(val)=>{
        if(val){
          this.done=false;   
          this.getStudentListData();
        }
      }
    })
  }

  getStudentListData(){
    this._studentService.getStudents().subscribe({
      next:(response)=>{
       this.dataSource=new MatTableDataSource(response);
       this.dataSource.sort=this.sort;
       this.dataSource.paginator=this.paginator;
       this.done=false;
       this.spinner();
       
      },
      error:console.log
    })
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ondeleteStudent(id:number){
    this._studentService.deleteStudent(id).subscribe({
      next:(res)=>{
        alert('Dusted');
        this.done=false; 
        this.getStudentListData();
       
        
      },
      error:console.log
    })
  }


  edit(data:any){
    const dilogref=this._matdilouge.open(AddOREditComponent,{data});
    dilogref.afterClosed().subscribe({
      next:(val)=>{
        if(val){
          this.done=false;
          this.getStudentListData();
          
        }error:console.log;
      }
    })
    
  }

  spinner(): void {
    setTimeout(() => {
        this.done = true;
        this.snackBar.open("Table Data Updated","close",{duration:10000});
        
    }, 5000);
   }
  
  
}

