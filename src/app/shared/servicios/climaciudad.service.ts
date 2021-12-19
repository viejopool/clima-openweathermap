import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClimaciudadService {
  // url:string;
  urlClima:string;
ciudadSelecc:BehaviorSubject<any>

  constructor(private http:HttpClient) {
    // this.url=environment.API_CIUDADES
    this.urlClima=environment.API_CLIMA
    this.ciudadSelecc=new BehaviorSubject<any>({})
   }
  // getCiudades():Observable<any>{
  //   return this.http.get<any>(this.url)
  // }
  getClimaCiudad(ciudad:string):Observable<any>{
   return this.http.get<any>(`${this.urlClima}${ciudad}`)

  }
  setCiudad(ciudad:any):void{
   //console.log('esta llegando',ciudad,typeof(ciudad))
    this.ciudadSelecc.next(ciudad)
    //console.log(ciudad,this.ciudadSelecc)
  }
  getCiudadClima():Observable<any>{
    return this.ciudadSelecc.asObservable()
  }
}
