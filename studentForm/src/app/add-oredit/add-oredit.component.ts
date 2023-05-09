import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from '../services/student.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-oredit',
  templateUrl: './add-oredit.component.html',
  styleUrls: ['./add-oredit.component.scss']
})
export class AddOREditComponent implements OnInit {
      courses :String[]=['Batsmen','Bowler','All-rounder'];
      empform:FormGroup;

      constructor(private formbuild:FormBuilder,private _studentService:StudentService,
                   private _dilogref:MatDialogRef<AddOREditComponent>,
                    @Inject(MAT_DIALOG_DATA)public data:any){

                  this.empform=this.formbuild.group({
                    name:'',jersey_number:'',gender:'',doj:'',player_roll:'',email:''
                  })

                  }
      ngOnInit(): void {
        this.empform.patchValue(this.data);
      }

      onFormSubmit(){
        if(this.empform.valid){

          if(this.data){
            this._studentService.addEditStudent(this.data.id,this.empform.value).subscribe({
              next:(val:any)=>{
                alert('Updated');
                this._dilogref.close(true);
              },
  
              error:(err)=>{
                console.error(err);
              }
            })

          }else{

            this._studentService.addStudent(this.empform.value).subscribe({
              next:(val:any)=>{
                alert('Added');
                this._dilogref.close(true);
              },
  
              error:(err)=>{
                console.error(err);
              }
            })

          }
          
        }
      }


}
