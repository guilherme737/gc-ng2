import { MembroService } from './membro.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-membro',
    templateUrl: './membro.component.html',
    styleUrls: ['./membro.component.css']
})
export class MembroComponent implements OnInit {

    constructor(private membroService: MembroService) {

    }

    public membros;

    ngOnInit() {
    }

    public obterTodos() {

        this.membros = this.membroService.obterTodos();

    }
}
