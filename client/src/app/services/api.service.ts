import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


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

  getPelicula(id: string): Observable<any> {
    return this.http.get<any[]>('http://localhost:3001/cinefilos/movie').pipe(
      map(movies => movies.find(movie => movie.id === id))
    );
  }
}
