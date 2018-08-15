import { Component, OnInit } from '@angular/core';
import { ProductService } from '../products.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) { 


  }

  ngOnInit() {
    this.products = this.productService.getProducts();
    console.log(this.products);
  }

}
