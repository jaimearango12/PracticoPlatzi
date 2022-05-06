import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpStatusCode } from '@angular/common/http';
import { catchError,map, retry } from 'rxjs/operators';
import { Product, CreateProductDTO, UpdateProductDTO } from '../models/product.model';

import { environment } from 'src/environments/environment';
import { checkTime } from '../interceptors/time.interceptor';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = `${environment.API_URL}/api/products`;

  constructor(
    private http:HttpClient
  ) { }

  getAllProducts(limit?:number, offset?: number){
    let params = new HttpParams();
    if(limit && offset){
      params = params.set('limit', limit);
      params = params.set('offset', offset);
    }
    return this.http.get<Product[]>(this.apiUrl, { params, context: checkTime() })
    .pipe(
      retry(3),
      map(products => products.map(item=>{
        return {
          ...item,
        }
      }))
    )
  }

  getProduct(id: string){
    return this.http.get<Product>(`${this.apiUrl}/${id}`)
    .pipe(
      catchError((error: HttpErrorResponse)=>{
        if(error.status === HttpStatusCode.Conflict){
        return throwError('algo falla en el server');          
        }
        if(error.status === 404){
          return throwError('El producto no existe');          
          }
        return throwError('Ups algo salio mal');
      }) 
    )
  }

  getProductsByPage(limit:number, offset: number){
    return this.http.get<Product[]>(`${this.apiUrl}`, {
      params: {limit, offset}
    })
  }

  create(dto:CreateProductDTO){
    return this.http.post<Product>(this.apiUrl,dto);
  }

  update(id: string,dto:UpdateProductDTO){
    return this.http.put<Product>(`${this.apiUrl}/${id}`,dto);
  }

  delete(id:string){
    return this.http.delete<Boolean>(`${this.apiUrl}/${id}`);
  }
}
