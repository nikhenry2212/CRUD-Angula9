import { HttpClient } from '@angular/common/http';// import de métodos http
import { Injectable } from '@angular/core';
//snack-bar é um modal de confirmação de criação de produto
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';
import { Product } from './product.model'; // modelo do product

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //url do db
  baseUrl = 'http://localhost:3001/products'

  //acessamos através do constructor
  //injetamos os métodos na class
  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient) { }

  //método para confirmaçãode criação de produto
  //passamos uma msg como parametro
  //tudo q está no service conseguimos acessar no component
  //está no product-create
  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    })
  }
  //Método de criar produto no db
  //passa um Product como parametro
  //q Ele retorna um Observable do Product
  create(product: Product): Observable<Product> {
    //req via post passando o modelo de Product com url  e o product
    return this.http.post<Product>(this.baseUrl, product)
  }
  //Método de ler q está sendo acessado no product-read.ts
  //Método q acessa a api retornando um Observable de Array de Product
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl)   
  }
}
