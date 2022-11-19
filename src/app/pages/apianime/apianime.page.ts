import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-apianime',
  templateUrl: './apianime.page.html',
  styleUrls: ['./apianime.page.scss'],
})
export class ApianimePage implements OnInit {

  //variables auxiliares para trabajar las peticiones:

  cant_personajes: number = 0;
  personajes : any[] = [];

  constructor(private apiService: ApiService) { }

  async ngOnInit() {
    await this.apiService.get();
     //llamar al metodo que obtiene a todos los personajes:
    let respuesta = await this.apiService.get();

    respuesta.subscribe( (data:any) => {
      console.log(data.info);

      this.cant_personajes = data.info.count;
      this.personajes = data.results;

    });
  }

}
