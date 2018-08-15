import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductsNewComponent } from './products/products-new/products-new.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductService } from './products/products.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductsNewComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
