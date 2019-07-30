import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

interface CreateCategoryBody {
  name: string;
  value: string;
}

@Injectable({ providedIn: 'root' })
export class ArticalService {
  constructor(private httpClient: HttpClient, private apollo: Apollo) {}

  CreateCategory(data: CreateCategoryBody): Observable<any> {
    return this.apollo.mutate({
      mutation: gql`
        mutation CreateCategory{
          createArtical(
            name: "${data.name}",
            value: "${data.value}",
          ) {
            artical {
              title
              id
            }
          }
        }
      `
    });
  }

  category(): Observable<any> {
    return this.apollo.watchQuery({
      query: gql`
        {
          category() {
            category
          }
        }
      `
    }).valueChanges;
  }
}
