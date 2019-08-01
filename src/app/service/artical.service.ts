import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';

interface CreateArticalBody {
  title: string;
  content: string;
  createDate: string;
  category: string;
}

@Injectable({ providedIn: 'root' })
export class ArticalService {
  constructor(private httpClient: HttpClient, private apollo: Apollo) {}

  createArtical(data: CreateArticalBody): Observable<any> {
    return this.apollo.mutate({
      variables: { content: data.content },
      mutation: gql`
        mutation CreateArtical($content: String){
          createArtical(
            title: "${data.title}",
            content: $content,
            createDate: "${data.createDate}",
            category: "${data.category}",
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

  getArtical(id: string): Observable<any> {
    return this.apollo
      .watchQuery({
        query: gql`
        {
          artical(id: "${id}") {
            # success
            title
            content
            createDate
            category
            pre {
              id
              title
            }
            next {
              id
              title
            }
          }
        }
      `
      })
      .valueChanges.pipe(map(item => item.data.artical));
  }

  getArticals(pageIndex: number): Observable<any> {
    return this.apollo.watchQuery({
      query: gql`
        {
          articals(pageIndex: ${pageIndex}) {
            # success
            pageIndex
            list {
              id
              title
              createDate
              category
            }
          }
        }
      `,
      fetchPolicy: 'network-only'
    }).valueChanges;
  }

  deleteArtical(id): Observable<any> {
    return this.apollo.mutate({
      mutation: gql`
        mutation DeleteArtical{
          deleteArtical(
            id: "${id}"
          ){
            success
          }
        }
      `
    });
  }
}
