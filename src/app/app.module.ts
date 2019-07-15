import { MessageService } from './service/message.service';
import { AdminModule } from './admin/admin.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { PlaygroundComponent } from './playground/playground.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeService } from './service/home.service';
import { LoginComponent } from './login/login.component';
import { ManageComponent } from './manage/manage.component';
import { CustomMaterialModule } from './modules/customMarterialModule.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DigestComponent } from './home/digest/digest.component';
import { CategoryComponent } from './home/category/category.component';
import { GraphQLModule } from './graphql.module';
import { UserService } from './service/user.service';
import { MarkdownModule } from 'ngx-markdown';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    PlaygroundComponent,
    LoginComponent,
    ManageComponent,
    DigestComponent,
    CategoryComponent,
    BlogDetailComponent
  ],
  imports: [
    // AdminModule,
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
