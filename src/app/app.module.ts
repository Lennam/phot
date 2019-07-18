import { MessageService } from './service/message.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { HttpClientModule } from '@angular/common/http';
import { HomeService } from './service/home.service';
import { ManageComponent } from './manage/manage.component';
import { CustomMaterialModule } from './modules/customMarterialModule.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from './components/category/category.component';
import { GraphQLModule } from './graphql.module';
import { UserService } from './service/user.service';
import { MarkdownModule } from 'ngx-markdown';
import { BlogModule } from './blog/blog.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AppComponent, ManageComponent, LoginComponent],
  imports: [
    // AdminModule,
    BlogModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    GraphQLModule,
    MarkdownModule.forRoot()
  ],
  providers: [HomeService, MessageService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
