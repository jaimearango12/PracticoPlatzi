import { Component, OnInit } from '@angular/core';
import { zip } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Product, CreateProductDTO, UpdateProductDTO} from 'src/app/models/product.model';

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
  limit= 10;
  offset= 0;
  StatusDetail: 'loading'|'success'|'error'|'init' ='init';

  
  constructor(
    private storeService: StoreService,
    private productService: ProductService
  ) { 
    this.myShoppingCart= this.storeService.getShoppingCart();
  }

  ngOnInit():void {
    this.productService.getProductsByPage(10, 0)
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
    this.StatusDetail = 'loading';
    this.productService.getProduct(id)
    .subscribe(data => {
      this.toggleProductDetail();
      this.productChoosen = data;
      this.StatusDetail = 'success';
    },error => {
      console.error(error);
      this.StatusDetail = 'error';
    })
  }

  readAndUpdate(id: string){
    this.productService.getProduct(id)
    .pipe(
      switchMap((product) =>  this.productService.update(product.id, {title: 'change'}))
    )
    .subscribe(data =>{
      console.log(data);
    });
    zip(
      this.productService.getProduct(id),
      this.productService.update(id, {title:'name'})
    )
    .subscribe(response => {
      const read= response[0];
      const update= response[1];
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

  updateProduct(){
    const changes: UpdateProductDTO = {
      title: 'nuevo title',
    }
    const id = this.productChoosen.id;
    this.productService.update(id, changes)
    .subscribe(data =>{
      const productIndex = this.products.findIndex(
        item => item.id === this.productChoosen.id);
      this.products[productIndex] = data;
      this.productChoosen = data;
    })
  }

  deleteProduct(){
    const id = this.productChoosen.id;
    this.productService.delete(id)
    .subscribe(()=>{
        const productIndex = this.products.findIndex(
          item => item.id === this.productChoosen.id);
        this.products.splice(productIndex, 1);
        this.showProductDetail = false;
    })
  }

  loadMore(){
    this.productService.getProductsByPage(this.limit, this.offset)
    .subscribe(data => {
      this.products = this.products.concat(data);
      this.offset += this.limit;
    });
  }
}

