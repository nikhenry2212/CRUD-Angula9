import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product;
  //injetar route: ActivatedRoute;
  constructor(
    private router: Router,
    private productService: ProductService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    //inicializar ja com os dados no component
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.readById(id).subscribe(product => {
      this.product = product;
    })
  }
  updateProduct(): void {
       //dentro do método update tem um método put
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage('Produto atualizado com sucesso ✔')
      this.router.navigate(['/products']);

    })
  }
  cancel(): void {
    this.router.navigate(['/products'])
  }
}
