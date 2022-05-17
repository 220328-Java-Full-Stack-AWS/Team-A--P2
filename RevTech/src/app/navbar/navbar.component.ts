import { Component, OnInit } from '@angular/core';
import { faUserAstronaut, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  // Font Awesome Icons
  public faUserAstronaut = faUserAstronaut;
  public faShoppingCart = faShoppingCart;

  constructor() { }

  ngOnInit(): void {
  }

  // Front end add to cart
  public counter = 0;

  public userMenuDropdown(){
    const userMenu = document.querySelector('.user-menu');
    userMenu?.classList.toggle('magic');
  }

}
