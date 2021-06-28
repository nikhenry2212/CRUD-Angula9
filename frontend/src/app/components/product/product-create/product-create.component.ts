import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service'; //import do service para conseguir acessar os métodos
import { Router } from '@angular/router';
import { Product } from '../product.model';//modelo de Product a ser seguido

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  //criação de um produto teste
  product: Product = {
    name: '',
    price: null
  }

  constructor(
    //declaramos no constructor para conseguimos acessar os métodos de ambos
    private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {

  }
  createProduct(): void {
    //vou no Servico do Produto, chamo um método create
    //passo o product q vou criar
    //método subcribe para me inscrever no retorno do observable
    //ou seja, q estou interessado naquele evento 
    this.productService.create(this.product).subscribe(() => {
      //acessamos a snack-bar através do product service
      //chamamos um método dela e passamos a msg 
      this.productService.showMessage('Produto Criado ✔')
      this.router.navigate(['/products']);

    })

  }
  //Método de cancelamento de criaçãodo product
  cancel(): void {


    //Chamamos o método router q está implicito no angular
    // declaramos q voltar para pagina de products
    this.router.navigate(['/products']);
  }


}
