import { Injectable } from '@angular/core';
import User from './models/User';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user?: User;

  constructor(private http: HttpClient, private router: Router) { }

  public async login(username: string, password: string) {
    this.http.post(environment.apiUrl + 'auth/login', { email: username, password: password }).toPromise()
      .then((data: any) => {
        localStorage.setItem('userToken', data.token);
        this.router.navigate(['logged']);
      })
      .catch(() => console.log('Wrong credentials'));
  }
}
