import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { RegisterResponse } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private endpointUrl: string = 'http://localhost:3000/users/';

  private userKey: string = 'userInfo';

  constructor(
    private httpClient: HttpClient,
    private router: Router,
  ) {}

  public registerUser(email: string, password: string): Observable<RegisterResponse> {
    const url = `${this.endpointUrl}/register`;

    const motoboy = 
      this.httpClient.post<RegisterResponse>(url, { email, password })
      .pipe(
        map(
          (userInfo: RegisterResponse) => {
            this.storeUserInfo(userInfo);
            this.router.navigateByUrl('/');

            return userInfo
          })
        )

    return motoboy;  
  }

  public logout(): void {
    localStorage.removeItem(this.userKey);
    this.router.navigateByUrl('/login');
  }

  public getUserToken(): string {
    const userToken = this.retrieveUserInfo().accessToken;

    return userToken;
  }

  public isLoggedIn(): boolean {
    const isLoggedIn: boolean = !!this.retrieveUserInfo();

    return isLoggedIn;
  }

  private retrieveUserInfo(): RegisterResponse {
    const stringifiedUserInfo = JSON.parse(localStorage.getItem(this.userKey)) as RegisterResponse;

    return stringifiedUserInfo;
  }

  private storeUserInfo(userInfo: RegisterResponse): void {
    const stringifiedUserInfo: string = JSON.stringify(userInfo);

    localStorage.setItem(this.userKey, stringifiedUserInfo)
  }
}
