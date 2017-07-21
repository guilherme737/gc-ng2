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
  ]
})
export class MembroModule { }
