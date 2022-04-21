import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myShoppingCart: Product[]= [];
  total = 0;
  products: Product[] = [];
  today = new Date();
  datw = new Date(2021,6,12)
  
  constructor(
    private storeService: StoreService,
    private productService: ProductService
  ) { 
    this.myShoppingCart= this.storeService.getShoppingCart();
  }

  ngOnInit():void {
    this.productService.getAllProducts()
    .subscribe(data => {
      this.products = data;
    });
    
  }

  onAddToShoppingCart(product:Product) {
    this.storeService.adddProduct(product);
    this.total = this.storeService.getTotal();
  }

}
