import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

interface CreateCategoryBody {
  name: string;
  value: string;
}

@Injectable({ providedIn: 'root' })
export class CategoryService {
  constructor(private httpClient: HttpClient, private apollo: Apollo) {}

  // 通讯
  private createStatusSource = new Subject<boolean>();
  createStatus$ = this.createStatusSource.asObservable();
  createStatus(status: boolean) {
    this.createStatusSource.next(status);
  }

  createCategory(data: CreateCategoryBody): Observable<any> {
    return this.apollo.mutate({
      mutation: gql`
        mutation CreateCategory{
          createCategory(
            name: "${data.name}",
            value: "${data.value}",
          ) {
              name
              value
            }
        }
      `
    });
  }

  category(): Observable<any> {
    return this.apollo.watchQuery({
      query: gql`
        {
          category {
            name
            value
          }
        }
      `,
      fetchPolicy: 'network-only'
    }).valueChanges;
  }

  deleteCategory(name: string): Observable<any> {
    return this.apollo.mutate({
      mutation: gql`
        mutation DeleteCategory{
          deleteCategory(name: "${name}")
        }
      `
    });
  }
}
