import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURl: string = `https://api.yelp.com/v3/businesses/search` 

  constructor(private httpClient: HttpClient) { }
}
