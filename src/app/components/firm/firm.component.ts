import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, Validators, FormControl } from '@angular/forms';
import { FirmService } from '../../services/firm.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'firm',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule,CommonModule],
  providers:[FirmService],
  templateUrl: './firm.component.html',
  styleUrl: './firm.component.css'
})
export class FirmComponent implements OnInit{
  firmForm: FormGroup|any; 
  constructor(private firmServcie:FirmService){

  }

  submitData(){
    if(!this.firmForm.invalid){
      this.firmServcie.createFirm(this.firmForm).subscribe((data:any)=>{
        console.log('success msg');
      },(error:any)=>{
          console.log(error);
        });
     } 
  }
  ngOnInit() { 
  this.firmForm = new FormGroup({
    firmName: new FormControl('', [Validators.required, Validators.minLength(2),Validators.pattern("[a-zA-Z ]*")]),
   firmId: new FormControl('', [Validators.required, Validators.minLength(2),Validators.pattern("[a-zA-Z0-9]*")])
   });
  }
}
