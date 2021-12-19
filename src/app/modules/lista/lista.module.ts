import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaRoutingModule } from './lista-routing.module';
import { ListaComponent } from './pages/lista/lista.component';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';

@NgModule({
  declarations: [
    ListaComponent
  ],
  imports: [
    CommonModule,
    ListaRoutingModule,
    NzDescriptionsModule,
  ],exports:[ListaComponent]
})
export class ListaModule { }
