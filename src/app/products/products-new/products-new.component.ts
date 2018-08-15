import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../products.service';

@Component({
  selector: 'app-products-new',
  templateUrl: './products-new.component.html',
  styleUrls: ['./products-new.component.css']
})
export class ProductsNewComponent implements OnInit {
  newProduct: Product;
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('descInput') descriptionInputRef: ElementRef;
  @ViewChild('priceInput') priceInputRef: ElementRef;
  @ViewChild('quantityInput') quantityInputRef: ElementRef;
  
  
  constructor(private productService: ProductService) { }
  
  ngOnInit() {

  }

 onClick() {
   const name = this.nameInputRef.nativeElement.value;
   const description = this.descriptionInputRef.nativeElement.value;
   const price = this.priceInputRef.nativeElement.value;
   const quantity = this.quantityInputRef.nativeElement.value;
   this.newProduct = new Product(name, description, price, quantity);
   console.log(this.newProduct);
   this.productService.addProduct(this.newProduct);
 }
}
