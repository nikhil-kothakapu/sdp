import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { StudentService } from '../services/student.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent   implements OnInit{
  chart:any;
  bowl:any=0;
  bat:any=0;
  allr:any=0;

  lesstf:any=0;
  greatertf:any=0;
  ds:any;
  bardata:any;

  constructor(private _studentService:StudentService){
        
  }
  

   ngOnInit (): void {
    this.getStudentListData();
    
  }
  chatcreatpi(){
    this.chart=new Chart("paichart",{
      plugins:[ChartDataLabels],
      type:'pie',
      data:{
        labels: ['Batting', 'Bowling', 'All-rounder'],
        datasets: [{label: 'Players',data: [this.bat, this.bowl, this.allr],backgroundColor: ['#ffe680','#80ffff','#b3ffb3'],hoverOffset: 4,hoverBorderColor:'#b3b3b3'},],
      },
      options:{plugins:{datalabels:{formatter:function(value:any,context:any){return value},font:{weight:150,size:15}}}}

    })
  }


  chatcreatbar(){
    this.chart=new Chart("barchart",{
      plugins:[ChartDataLabels],
      type:'bar',
      data:{
        labels: this.bardata.map((row:any) => row.age),
        datasets: [{label: 'No of players',data:this.bardata.map((row:any) => row.numb),barThickness: 60}],
      },
      

    })
  }

  getStudentListData(){
    this._studentService.getStudents().subscribe({
      next:(response)=>{
        this.ds=response;

        for(let i of this.ds){
          if(i.player_roll=='Batsmen'){
            this.bat+=1;
          }else if(i.player_roll=='Bowler'){
            this.bowl+=1;
          }else{
            this.allr+=1;
          }
        }
        this.chatcreatpi();
        var date=new Date().getFullYear();
        console.log(date);

        for(let j of this.ds){
          var pastdate=new Date(j.doj).getFullYear();
          if((date-pastdate)<=25){
            this.lesstf+=1;
          }else{
            this.greatertf+=1;
          }
        }
        this.bardata=[{age:">25",numb:this.lesstf},{age:"<25",numb:this.greatertf}];

        this.chatcreatbar();

        console.log(this.lesstf);
        console.log(this.greatertf);


      },
      error:console.log
    })
  }

  
  

  

}
