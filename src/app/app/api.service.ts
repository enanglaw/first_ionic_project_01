import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map, Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  personChanged=new Subject<string[]>()
  person: any[]=[]
  constructor(private http:HttpClient) 

  { }
 getData(){
  const url='https://jsonplaceholder.typicode.com/users'
   this.http.get<any>(url).pipe(map(item=>item.map((data: any)=>{return data}))).subscribe((data)=>{
       console.log(data)
       this.personChanged.next(data)
   })
 }
}
