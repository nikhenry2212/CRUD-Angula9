import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'; // Router do angular
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {
  //injetei ele dentro da class
  constructor(
    private router: Router, 
    private headerService: HeaderService) {
    headerService.headerData = {
      title: "Cadastro de produtos",
      icon: "storefront",
      routeUrl: '/products'
    };
   }


  ngOnInit(): void {
  }
  //funcao para navegar para tela de products/create
  navigateToProductCreate(): void {
    this.router.navigate(['/products/create']);
    
  }
}
