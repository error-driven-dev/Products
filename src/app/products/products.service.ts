import { Product } from './product.model';

export class ProductService {
    private products: Product[] = [
      new Product('Keyboard', 'Corsair', 159.99, 500),
      new Product('Mouse', 'Corsair', 89.99, 500),
      new Product('Keyboard', 'Das', 129.99, 500),
      new Product('Mouse', 'Das', 59.99, 500),
    ]

    getProducts() {
        return this.products;
    }
        
    


}