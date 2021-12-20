import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClimaciudadService } from 'src/app/shared/servicios/climaciudad.service';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit, OnDestroy {

  ciudadBuscada:any;
  suscripcion!:Subscription;
//  ciudadService:string;

  constructor(private _climaService:ClimaciudadService) { 
    this.ciudadBuscada={}
   // this.ciudadService=''
    
  }
  ngOnInit(): void {
    this.suscripcion.add(this._climaService.getCiudadClima().subscribe(data=>{this.ciudadBuscada=data
      console.log(data)
    }))
  }
  ngOnDestroy(): void {
      this.suscripcion.unsubscribe()
  }
}
