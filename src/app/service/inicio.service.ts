import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class InicioService {    //inicioService = postagemService

  constructor(private http: HttpClient) { }

  token = {
    //exatamente como foi no  "headers" do Postman
    headers: new HttpHeaders().set("Authorization", environment.token)
  }

  getAllPostagens(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>('http://localhost:8080/postagem', this.token)
  }

  getByIdPostagem(id:number):Observable<Postagem>{
    return this.http.get<Postagem>(`http://localhost:8080/postagem/${id}`,this.token)
  }

  getByTituloPostagem(titulo: string):Observable<Postagem[]>{
    return this.http.get<Postagem[]>(`http://localhost:8080/postagem/titulo/${titulo}`,this.token)
  }

  /* getByDescricaoPostagem(titulo: string):Observable<Postagem[]>{
    return this.http.get<Postagem[]>(`http://localhost:8080/postagem/${descricao}`,this.token)
  } */

  postPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.post<Postagem>("http://localhost:8080/postagem", postagem, this.token)
  }

  putPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.put<Postagem>("http://localhost:8080/postagem", postagem, this.token)
  }

  deletePostagem(id: number){   //É obrigatório o uso da CRASE aqui
    return this.http.delete(`http://localhost:8080/postagem/${id}`, this.token)
  }


}
