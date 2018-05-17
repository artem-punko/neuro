import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestOptions } from '@angular/http';

@Injectable()
export class NeuroService {

  constructor(private http: HttpClient) { }

  neuro(type, one, two, three) {
    return this.http.get('http://localhost:3001/neuro/' + type + '/' + one + '/' + two + '/' + three);
  }
}
