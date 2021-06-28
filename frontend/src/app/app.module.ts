import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';// import com dependencias para fazer req http

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

import { RedDirective } from './directives/red.directive';

import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ForDirective } from './directives/for.directive';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';

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
    ProductCreateComponent
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
    HttpClientModule // import de métodos para fazer requisicoes http
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
