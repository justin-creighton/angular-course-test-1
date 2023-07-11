import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export type User = {
  username: string;
  password: string;
};

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  message: string = '';
  userList: Array<User> = [
    {
      username: 'Justin',
      password: 'password',
    },
  ];
  constructor(private router: Router) {}

  login(username: string, password: string) {
    const user = this.userList.find((user: User) => user.username === username);

    if (!user) {
      this.message = 'Incorrect username or user does not exist';
      return;
    }
    if (password !== user?.password) {
      this.message = 'Incorrect password';
      return;
    }
    this.router.navigateByUrl('/dashboard');
  }
}
