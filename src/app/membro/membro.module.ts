import { MembroService } from './membro.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembroComponent } from './membro.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MembroComponent],
  exports:[
    MembroComponent
  ],
  providers :[
    MembroService
  ]
})
export class MembroModule { }
