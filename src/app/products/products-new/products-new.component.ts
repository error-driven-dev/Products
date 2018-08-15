import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-products-new',
  templateUrl: './products-new.component.html',
  styleUrls: ['./products-new.component.css']
})
export class ProductsNewComponent implements OnInit {
 @Output() productAdded = new EventEmitter<Product>();
  constructor() { }
 newProduct: Product;
  ngOnInit() {
  }
 onClick(name, description, price, quantity){
   this.newProduct.name = name;
   this.newProduct.description = description;
   this.newProduct.price = price;
   this.newProduct.quantity = quantity;
   this.productAdded.emit(this.newProduct);

 }
}
