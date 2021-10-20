import { Route } from '@angular/router';
import { AddPostComponent } from './addPost/add-post/add-post.component';
import { HomeComponent } from './home/home.component';
import { OopsComponent } from './oops/oops/oops.component';
import { OnlyPostComponent } from './only-post/only-post.component';

export const appRoutes: Route[] = [
    { path: '', component: HomeComponent },
    { path: 'dodajPost', component: AddPostComponent },
    { path: 'post/:id', component: OnlyPostComponent },
    { path: '**', component: OopsComponent }
];
