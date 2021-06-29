import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';// import de métodos http
import { Injectable } from '@angular/core';
//snack-bar é um modal de confirmação de criação de produto
import { MatSnackBar } from '@angular/material/snack-bar'
import { EMPTY, Observable } from 'rxjs';
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
  //colocamos como param isError como false
  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success']
      //associamos as class com msgs de success e de erro style.css 
    })
  }
  //Método de criar produto no db
  //passa um Product como parametro
  //q Ele retorna um Observable do Product
  create(product: Product): Observable<Product> {
    //req via post passando o modelo de Product com url  e o product
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }
 
  //Método de ler q está sendo acessado no product-read.ts
  //Método q acessa a api retornando um Observable de Array de Product
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }
  //metodo para inicializar o componente com items a serrem editados
  readById(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }
  //Método para atualizar 
  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`;
    return this.http.put<Product>(url, product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }
  //método para excluir dentro do db
  delete(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Product>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }
  //funcao para exibir erro 
  errorHandler(e: any): Observable<any> {
    //showMessage(msg, isError = true) se tiver algum durante a req
    // vai mostra essa msg
    this.showMessage('Ocorreu um erro !', true)
    return EMPTY
  }
}
