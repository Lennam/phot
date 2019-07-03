import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

interface CreateUserBody {
  username: string;
  password: string;
  mail?: string;
}

interface LoginBody {
  username: string;
  password: string;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private httpClient: HttpClient, private apollo: Apollo) {}

  login(data: LoginBody): Observable<any> {
    return this.apollo.mutate({
      mutation: gql`
        mutation Login{
          login(
            username: "${data.username}",
            password: "${data.password}"
          ) {
            token
          }
        }
      `
    });
  }

  signIn(data: CreateUserBody): Observable<any> {
    return this.apollo.watchQuery({
      query: gql`
        {
          createUser(
            username: "${data.username}",
            password: "${data.password}",
            mail: "${data.mail ? data.mail : ''}",
            createDate: "${new Date()}"
            type: 0
          ) {
            success
            message
            user
          }
        }
      `
    }).valueChanges;
  }

  getUserInfo(): Observable<any> {
    return this.apollo.watchQuery({
      query: gql`
        {
          me {
            username
            createDate
            mail
            type
          }
        }
      `
    }).valueChanges;
  }
}
