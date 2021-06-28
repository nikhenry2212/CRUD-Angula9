import { Injectable } from '@angular/core';
//snack-bar é um modal de confirmação de criação de produto
import {MatSnackBar} from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //acessamos através do constructor
  constructor(private snackBar: MatSnackBar) { }

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
}
