import { Route } from '@angular/router';
import { TodosPageComponent } from './basic-page/todos-page.component';
import { PostsPageComponent } from './infinite-scroll-page/posts-page.component';
import { PaginationPageComponent } from './pagination-page/pagination-page.component';
import { MutationPageComponent } from './mutation-page/mutation-page.component';
import { IntersectingPageComponent } from './intersecting-page/intersecting-page.component';
import { DynamicPageComponent } from './dynamic-page/dynamic-page.component';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'basic',
  },
  {
    path: 'basic',
    component: TodosPageComponent,
  },
  {
    path: 'dynamic',
    component: DynamicPageComponent,
  },
  {
    path: 'infinite-scroll',
    component: PostsPageComponent,
  },
  {
    path: 'intersecting',
    component: IntersectingPageComponent,
  },
  {
    path: 'pagination',
    component: PaginationPageComponent,
  },
  {
    path: 'mutation',
    component: MutationPageComponent,
  },
];
