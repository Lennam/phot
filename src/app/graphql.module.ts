import { MessageService } from 'src/app/service/message.service';
import { onError } from 'apollo-link-error';
import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink, concat } from 'apollo-link';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

const uri = 'http://localhost:3000/graphql'; // the URL of the GraphQL server

const noTokenApi = {
  Login: '登录',
  Articals: '文章列表',
  Artical: '文章详情'
};

export function createApollo(
  httpLink: HttpLink,
  messageService: MessageService,
  router: Router
) {
  const http = httpLink.create({ uri });

  const authMiddleware = new ApolloLink((operation, forward) => {
    // add the authorization to the headers
    console.log('ApiName: ', operation.operationName);
    if (!noTokenApi[operation.operationName]) {
      operation.setContext({
        headers: new HttpHeaders().set(
          'Authorization',
          localStorage.getItem('token') || ''
        )
      });
    }
    return forward(operation);
  });

  const errorLink = onError(({ graphQLErrors, networkError, response }) => {
    if (response && response.errors) {
      messageService.showSnackbar('error', response.errors[0].message);
      if (response.errors[0].message === '您没有权限，请登录后再试！') {
        router.navigate(['/login']);
      }
    }
    return response.data;
  });

  return {
    link: errorLink.concat(concat(authMiddleware, http)),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        errorPolicy: 'all'
      },
      mutate: {
        errorPolicy: 'all'
      }
    }
  };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink, MessageService, Router]
    }
  ]
})
export class GraphQLModule {}
