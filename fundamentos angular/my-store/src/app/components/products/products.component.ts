import { Component, OnInit } from '@angular/core';
import { Product, CreateProductDTO} from 'src/app/models/product.model';
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
  showProductDetail = false;
  productChoosen: Product= {
    id: '',
    title:'',
    images: [],
    price: 0,
    description: '',
    category: {
      id: '',
      name: ''
    }
  };
  
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

  toggleProductDetail(){
    this.showProductDetail = !this.showProductDetail;
  }
  
  onShowDetail(id: string){
    this.productService.getProduct(id)
    .subscribe(data => {
      this.toggleProductDetail();
      this.productChoosen = data;
    })
  }

  createNewProduct(){
    const product:CreateProductDTO = {
      title: 'Nuevo Producto',
      description: 'ramdom',
      images: [''],
      price: 1000,
      categoryId: 2
    }

    this.productService.create(product)
    .subscribe(data => {
      this.products.unshift(data);      
    })
  }
}
