import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';

interface CreateArticalBody {
  id?: string;
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

  updateArtical(data: CreateArticalBody): Observable<any> {
    return this.apollo.mutate({
      variables: { content: data.content },
      mutation: gql`
        mutation UpdateArtical($content: String){
          updateArtical(
            id: "${data.id}",
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
        query Artical{
          artical(id: "${id}") {
            # success
            id
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
      .valueChanges.pipe(map(item => item.data));
  }

  getArticals(pageIndex: number, category?: string): Observable<any> {
    const categoryValue = category ? category : '';
    return this.apollo
      .watchQuery({
        query: gql`
        query Articals{
          articals(
            pageIndex: ${pageIndex},
            category: "${categoryValue}"
          ) {
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
      })
      .valueChanges.pipe(map(item => item.data));
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
