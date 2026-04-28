import { Routes } from '@angular/router';
// import { Home } from './Components/lazy-loading/home/home';
// import { Login } from './Components/lazy-loading/login/login';
// import { PageNotFound } from './Routing/page-not-found/page-not-found';
// import { Home } from './Routing/home/home';
// import { About } from './Routing/about/about';
// import { Contact } from './Routing/contact/contact';
// import { Login } from './Routing/login/login';
// import { Signup } from './Routing/signup/signup';
// import { Users } from './DynamicRouting/users/users';
// import { UserInfo } from './DynamicRouting/user-info/user-info';
// import { CompanyProfile } from './Routing/company-profile/company-profile';
// import { User } from './Routing/user/user';
// import { Page2 } from './Route/page2/page2';
// import { Page3 } from './Route/page3/page3';
// import { Page1 } from './Route/page1/page1';
// import { Product } from './Routing/product/product';
// import { Home } from './Components/lazy-loading/home/home';
// import { Login } from './Components/lazy-loading/login/login';
// import { LazyLoading } from './Services/lazy-loading';
// import { inject } from '@angular/core';
// import { Team } from './Routing/user/user';
import { PageNotFound } from './Routing/page-not-found/page-not-found';
import { Home } from './Guard/home/home';
import { Login } from './Guard/login/login';
import { Dashboard } from './Guard/dashboard/dashboard';
import { authGuard } from './Guard/guard/auth-guard';
// import { Home } from './Routing/home/home';
// import { RouterNavigate } from './Routing/router-navigate/router-navigate';
// import { Login } from './Routing/login/login';
// import { About } from './Routing/about/about';
// import { TeamHome } from './Routing/DataRouting/team-home/team-home';
// import { TeamUser } from './Routing/DataRouting/team-user/team-user';

export const routes: Routes = [
  { path: 'home', component: Home, title: 'Home Page' },
  { path: 'login', component: Login, title: 'Login Page' },
  { path: 'dashboard', component: Dashboard, canActivate: [authGuard], title: 'User Dashboard' },
  { path: '', redirectTo: 'home', pathMatch: 'full', title: 'Home Page' },
  { path: '**', component: PageNotFound, title: 'Page Not Found!' },

  // { path: 'home', component: Home },
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // {
  //   path: 'router-navigate',
  //   component: RouterNavigate,
  //   title: 'Router Navigate',
  //   children: [{ path: 'signup', component: Signup, title: 'Sign Up' }],
  // },
  // { path: 'login/:username', component: Login, title: 'Login Page' },

  // { path: 'about', component: About, title: 'About Page' },
  // {
  //   path: 'team-home',
  //   component: TeamHome,
  // },
  // { path: 'team/:teamId/user/:userId', component: TeamUser },
  // { path: '', redirectTo: 'team-home', pathMatch: 'full' },

  // { path: 'home', component: Home, title: 'Home Page' },
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // {
  //   path: 'login',
  //   loadComponent: () => import('./Components/lazy-loading/login/login').then((c) => c.Login),
  //   title: 'Login',
  //   children: [
  //     {
  //       path: 'users',
  //       loadComponent: () =>
  //         import('./Components/lazy-loading/user/user').then((component) => component.User),
  //       children: [
  //         {
  //           path: 'client',
  //           loadComponent: () =>
  //             import('./Components/lazy-loading/client/client').then(
  //               (component) => component.Client,
  //             ),
  //         },
  //       ],
  //     },
  //     {
  //       path: 'all-employee',
  //       loadComponent: () => import('./Components/lazy-loading/emp/emp').then((c) => c.Emp),
  //       children: [
  //         {
  //           path: 'emp1',
  //           loadComponent: () => import('./Components/lazy-loading/emp1/emp1').then((c) => c.Emp1),
  //         },
  //         {
  //           path: 'emp2',
  //           loadComponent: () => import('./Components/lazy-loading/emp2/emp2').then((c) => c.Emp2),
  //         },
  //         {
  //           path: 'emp3',
  //           loadComponent: () => import('./Components/lazy-loading/emp3/emp3').then((c) => c.Emp3),
  //         },
  //       ],
  //     },
  //   ],
  // },

  // { path: 'home', component: Home },
  // {
  //   path: 'about',
  //   component: About,
  //   title: 'About Page',
  //   children: [{ path: 'profile', component: CompanyProfile, title: 'Companies Profile' }],
  // },
  // { path: 'about', component: About },
  // {
  //   path: 'contact',
  //   component: Contact,
  //   title: 'Contact Page',
  //   data: { contactNumber: 7567619592 },
  // },
  // { path: 'login', component: Login, title: 'Login' },
  // { path: 'signup', component: Signup, title: 'Signup' },
  // { path: 'users', component: Users, title: 'All Users' },
  // { path: 'users/user-info/:id', component: UserInfo, title: titleResolver },
  // { path: 'user', component: User },
  // { path: 'product/:id', component: Product },
  // { path: 'product/:id/:name', component: Product },
  // { path: '', component: Page1 },
  // { path: 'page1', component: Page1 },
  // { path: 'page2', component: Page2 },
  // { path: 'page3', component: Page3 },
  // { path: '', redirectTo: 'home', pathMatch: 'full' },

  // /* Wild Card Route */
  { path: '**', component: PageNotFound },
];
