import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(public router: Router) {
  }
  ngOnInit(): void {
  }

  log(){
    this.router.navigate(['/main']);
  }

  change_to_regist(){
    const log = document.querySelector('.login') as HTMLDivElement;
    const reg = document.querySelector('.regist') as HTMLDivElement;
    const div = document.querySelector('.ion-padding') as HTMLDivElement;
    log.classList.add('onn');
    reg.classList.add('onn');
  }
  change_to_login(){
    const log = document.querySelector('.login') as HTMLDivElement;
    const reg = document.querySelector('.regist') as HTMLDivElement;
    log.classList.remove('onn');
    reg.classList.remove('onn');
  }

}
