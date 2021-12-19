import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClimaciudadService } from '../../../../shared/servicios/climaciudad.service';
import { Observable } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  busquedaForm: FormGroup;
  arrCiudades: Array<any>;
  obsCiudades$: Observable<any>;
  onlyCiudades: any[];
  datosClima!: any;
  displayList: boolean;

  constructor(
    private fb: FormBuilder,
    private _ciudadesService: ClimaciudadService,
    private _msnService: NzMessageService
  ) {
    this.displayList = false;
    this.busquedaForm = new FormGroup({});
    this.arrCiudades = [];
    this.obsCiudades$ = new Observable<any>();
    this.onlyCiudades = [];
  }

  ngOnInit(): void {
    // this._ciudadesService.getCiudades().pipe(map(data=>data.data),mergeAll(),map((ciudades:any)=>ciudades.cities))
    // .subscribe(arregloCiuades=>{
    //   console.log(arregloCiuades)

    // })

    this.busquedaForm = this.fb.group({
      ciudad: ['', Validators.required],
    });
  }
  onChange(value: string): void {
    this.arrCiudades = this.onlyCiudades.filter(
      (option) => option.toLowerCase().indexOf(value?.toLowerCase()) !== -1
    );
  }
  submitForm() {
    this._ciudadesService
      .getClimaCiudad(this.busquedaForm.get('ciudad')?.value)
      .subscribe(
        (data) => {
          this.datosClima = {
            temperatura: data.main.temp,
            ciudad: data.name,
            lat: data.coord.lat,
            lon: data.coord.lon,
            tmax: data.main.temp_max,
            tmin: data.main.temp_min,
            clima: data.weather[0].description,
            pais: data.sys.country,
          };
          this._ciudadesService.setCiudad(this.datosClima);
          this.displayList = true;
        },
        (e) => {
          this._msnService.error(e.error.message, { nzDuration: 4000 });
        }
      );

    this.busquedaForm.reset();
  }
}
