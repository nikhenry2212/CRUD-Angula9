import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product: Product

  constructor(
    //injeção de métodos para usar na class
    private router: Router,
    private productService: ProductService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // + = conversão de uma string para number
    // forma de iniiar a pag com os campo preenchidos com os dados do db
    const id = +this.route.snapshot.paramMap.get('id')
    this.productService.readById(id).subscribe(product => {
    this.product = product;
    })

  }

  deleteProduct(): void {
    //dentro do método delete tem um método delete

    this.productService.delete(this.product.id).subscribe(() => {
      this.productService.showMessage('Produto Excluído com sucesso👍')
      this.router.navigate(['/products']);

    })
  }
  cancel(): void {
    this.router.navigate(['/products']);

  }

}
