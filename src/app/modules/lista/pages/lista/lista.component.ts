import { Component, OnInit } from '@angular/core';
import { ClimaciudadService } from 'src/app/shared/servicios/climaciudad.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  ciudadBuscada:any;
//  ciudadService:string;

  constructor(private _climaService:ClimaciudadService) { 
    this.ciudadBuscada={}
   // this.ciudadService=''
    
  }
  ngOnInit(): void {
    this._climaService.getCiudadClima().subscribe(data=>{this.ciudadBuscada=data
      console.log(data)
    })
  }
}
