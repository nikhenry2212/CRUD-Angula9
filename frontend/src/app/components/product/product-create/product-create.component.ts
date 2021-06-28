import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service'; //import do service para conseguir acessar os métodos
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {


  constructor(
    //declaramos no constructor para conseguimos acessar os métodos de ambos
    private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {

  }
  createProduct(): void {
    //acessamos a snack-bar através do product service
    //chamamos um método dela e passamos a msg 
    this.productService.showMessage('Produto Criado')
  }
  //Método de cancelamento de criaçãodo product
  cancel(): void {
    //Chamamos o método router q está implicito no angular
    // declaramos q voltar para pagina de products
    this.router.navigate(['/products']);
  }


}
