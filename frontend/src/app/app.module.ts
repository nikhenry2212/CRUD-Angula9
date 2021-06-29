import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';//LOCALE_ID = para o angular entender a localização
import { HttpClientModule } from '@angular/common/http';// import com dependencias para fazer req http
import {FormsModule} from '@angular/forms'; //import pára fazer formulario


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//dependencias decomponents prontos do materialDesign do google
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { RedDirective } from './directives/red.directive';

import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ForDirective } from './directives/for.directive';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { ProductRead2Component } from './components/product/product-read2/product-read2.component';

import localePt from '@angular/common/locales/pt'; //adiciona a linguagem da formatação
import {registerLocaleData} from '@angular/common'; // função q registra a linguagem 

registerLocaleData(localePt)//Método para registrar
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    RedDirective,
    ForDirective,
    ProductCreateComponent,
    ProductReadComponent,
    ProductRead2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,// components de style
    MatSidenavModule,// components de style
    MatListModule,// components de style
    MatCardModule,// components de style
    MatButtonModule,// components de style
    MatSnackBarModule, // components de style msg de confirmação
    HttpClientModule, // import de métodos para fazer requisicoes http
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,

  ],
  providers: [{
    provide: LOCALE_ID,//declara o locale_id como provide
    useValue:'pt-BR' // e o valor de linguagem q ele suporta
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
