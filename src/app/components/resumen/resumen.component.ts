import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent {
  constructor(private router: Router) {}

}
