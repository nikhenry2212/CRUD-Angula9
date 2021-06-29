// Produto para leitura
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {
  // Que tem os produtos
  products: Product[]
  //Associa com a tabela ,para inserção de qutde de colunas
  displayedColumns = ['id', 'name', 'price']

  //Injetou o ProductService para conseguir acessar o serviços que vem da api
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    //pega o método de leitura e se inscreve para receber o evento do Observable
    //passando products como parametro
    this.productService.read().subscribe(products => {
      this.products = products;
      console.log(products);

    })
  }

}
