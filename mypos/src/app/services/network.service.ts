import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Welcome } from '../models/jsontest.model';
import { ResponseLogin, ResponseRegister } from '../models/user.model';
import { ResponseProduct, Product, ResponseProducts } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private hostURL = environment.baseAPIURL;
  private apiURL = `${this.hostURL}/api`;
  // -----------------------------------------------------
  private loginURL = `${this.apiURL}/auth/login`;
  private registerURL = `${this.apiURL}/auth/register`;
  private productURL = `${this.apiURL}/product`;
  public productImageURL = `${this.apiURL}/product/images`;

  constructor(private http: HttpClient) { }

  getJSONTEST(): Observable<[Welcome]> {
    return this.http.get<[Welcome]>("https://jsonplaceholder.typicode.com/posts")
  }

  login(data): Observable<ResponseLogin> {
    return this.http.post<ResponseLogin>(this.loginURL, data)
  }

  register(data): Observable<ResponseRegister> {
    return this.http.post<ResponseRegister>(this.registerURL, data)
  }

  getAllProduct(): Observable<ResponseProducts> {
    return this.http.get<ResponseProducts>(this.productURL)
  }

  getProduct(id): Observable<ResponseProduct> {
    return this.http.get<ResponseProduct>(this.productURL + "/" + id)
  }

  addProduct(product: Product): Observable<ResponseProduct> {
    return this.http.post<ResponseProduct>(this.productURL, this.makeFormData(product));
  }

  updateProduct(product: Product, id: string): Observable<ResponseProduct> {
    return this.http.put<ResponseProduct>(`${this.productURL}/${id}`, this.makeFormData(product));
  }

  deleteProduct(id: number): Observable<ResponseProduct> {
    return this.http.delete<ResponseProduct>(`${this.productURL}/${id}`);
  }

  makeFormData(product: Product): FormData {
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('price', `${product.price}`);
    formData.append('stock', `${product.stock}`);
    formData.append('upload_file', product.image);
    return formData;
  }

}
