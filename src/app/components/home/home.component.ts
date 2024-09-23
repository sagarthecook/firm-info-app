import { Component, OnInit } from '@angular/core';
import { FirmService } from '../../services/firm.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'home',
  standalone: true,
  imports: [CommonModule,RouterModule,HttpClientModule],
  templateUrl: './home.component.html',
  providers:[FirmService],
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  firmList:any=[];
  constructor(private firmService:FirmService, private _route:Router){

  }
 

  ClickOnCreateFirm(){
    this._route.navigate(['firm']);
  }

  onClickFirmName(item:any){
  }

  ngOnInit(): void {
   this.firmService.getFirmData().subscribe((response:any)=>{
    this.firmList = response.data;
   },
  (error:any)=>{
    console.log(error);
  })
  }


}
