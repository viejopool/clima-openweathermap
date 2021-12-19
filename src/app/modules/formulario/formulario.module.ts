import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormularioRoutingModule } from './formulario-routing.module';
import { FormComponent } from './pages/form/form.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import {ReactiveFormsModule} from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import{ListaModule} from '../lista/lista.module';
import { NzMessageModule } from 'ng-zorro-antd/message';


@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    FormularioRoutingModule,
    NzIconModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NzButtonModule,
    ListaModule,
    NzAutocompleteModule,
    NzMessageModule
  ]
})
export class FormularioModule { }
