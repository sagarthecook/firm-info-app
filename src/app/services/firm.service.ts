import { HttpClient } from "@angular/common/http";
import {Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseConstant } from "../constants/enum.constant";
import { FirmRequest } from "../model/Firm-request.model";

@Injectable()
export class FirmService {

    constructor(private http:HttpClient){

    }

    getFirmData():Observable<any>{
        return this.http.get('assets/firm.json');
    }
    
    createFirm(firm:FirmRequest) :Observable<any>{
        return this.http.post(BaseConstant.BASEURL + '/api/v1/firm/create/',firm);
    }
}