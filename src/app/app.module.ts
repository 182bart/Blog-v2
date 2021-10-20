import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogServiceService } from 'src/Service/blog-service.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AddPostComponent } from './addPost/add-post/add-post.component';
import { OopsComponent } from './oops/oops/oops.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routers';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { OnlyPostComponent } from './only-post/only-post.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddPostComponent,
    OopsComponent,
    OnlyPostComponent,
    NavComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BlogServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
