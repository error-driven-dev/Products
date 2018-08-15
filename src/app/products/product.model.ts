export class Product {
    public name: string;
    public description: string;
    public price: number;
    public quantity: number;
    public created_at: number = Date.now();
    public updated_at: number = Date.now();

 
    constructor(_name: string, _description: string, _price: number, _quantity: number) {
        this.name = _name;
        this.description = _description;
        this.price = _price;
        this.quantity = _quantity;
            
    }
}