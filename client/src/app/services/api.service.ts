import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  obtenerCiudades() {
    return this.http.get('http://localhost:3001/cinefilos/city');
  }
  obtenerPeliculas(){
    return this.http.get('http://localhost:3001/cinefilos/movie');
  }

}
