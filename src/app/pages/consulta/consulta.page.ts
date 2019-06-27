import { Component, OnInit } from '@angular/core';
import { CpService } from '../../servicios/cp.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.page.html',
  styleUrls: ['./consulta.page.scss'],
})
export class ConsultaPage implements OnInit {

  respuestaCP: any = {}

  constructor(private cpService: CpService) { }

  ngOnInit() {
  }

  enviarForm(formulario){
    const cp = formulario.form.value.cp
    this.cpService.getCp(cp).subscribe((data:any) =>{
      console.log(data);
      this.respuestaCP = data
    })
  }

}
