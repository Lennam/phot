import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

interface CreateArticalBody {
  title: string;
  content: string;
  createDate: string;
  category?: string[];
}

@Injectable({ providedIn: 'root' })
export class ArticalService {
  constructor(private httpClient: HttpClient, private apollo: Apollo) {}

  createArtical(data: CreateArticalBody): Observable<any> {
    return this.apollo.mutate({
      mutation: gql`
        mutation CreateArtical{
          createArtical(
            title: "${data.title}",
            content: "${data.content}",
            createDate: "${data.createDate}",
            category: [],
          ) {
            title
          }
        }
      `
    });
  }
}
