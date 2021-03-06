import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes,RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicsComponent } from './basics/basics.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { SearchAlgsComponent } from './alg-types/search-algs/search-algs.component';
import { TreesComponent } from './alg-types/trees/trees.component';
import { SortAlgsComponent } from './alg-types/sort-algs/sort-algs.component';
import { HashComponent } from './alg-types/hash/hash.component';
import { BeginerComponent } from './alg-types/beginer/beginer.component';
import { DataTypesComponent } from './alg-types/data-types/data-types.component';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RegisterPageComponent } from './register-page/register-page.component';
import { TestCompComponent } from './test-comp/test-comp.component';
import {HttpClientModule} from "@angular/common/http";
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { DescriptionBaseComponent } from './description-base/description-base.component';
import { BubbleSortDescComponent } from './description/search-algs/bubble-sort-desc/bubble-sort-desc.component';
import { NewLoginComponent } from './new-login/new-login.component';
import { NewRegisterComponent } from './new-register/new-register.component';
import { NewHomeComponent } from './new-home/new-home.component';
import { NewProfileComponent } from './new-profile/new-profile.component';
import { NewBoardAdminComponent } from './new-board-admin/new-board-admin.component';
import { NewBoardModeratorComponent } from './new-board-moderator/new-board-moderator.component';
import { NewBoardUserComponent } from './new-board-user/new-board-user.component';


const appRoutes: Routes =[
  {path: '', component: AuthLayoutComponent, children: []},
  {path: '', component: SiteLayoutComponent, children: []},
  {path: 'search-algs', component:SearchAlgsComponent},
  {path: 'trees', component:TreesComponent},
  {path: 'sort-algs', component:SortAlgsComponent},
  {path: 'hash', component:HashComponent},
  {path: 'beginer', component:BeginerComponent},
  {path: 'data-types', component:DataTypesComponent},
  {path: 'login', component:LoginPageComponent},
  {path: 'test-comp/test-comp.component.html', component:TestCompComponent},
  {path: 'register', component:RegisterPageComponent},
  { path: 'profile', component: ProfileComponent },
  { path: 'home', component: HomeComponent },
  {path: 'basedesc', component: DescriptionBaseComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    BasicsComponent,
    NavMenuComponent,
    SearchAlgsComponent,
    TreesComponent,
    SortAlgsComponent,
    HashComponent,
    BeginerComponent,
    DataTypesComponent,
    AuthLayoutComponent,
    SiteLayoutComponent,
    LoginPageComponent,
    RegisterPageComponent,
    TestCompComponent,
    ProfileComponent,
    HomeComponent,
    DescriptionBaseComponent,
    BubbleSortDescComponent,
    NewLoginComponent,
    NewRegisterComponent,
    NewHomeComponent,
    NewProfileComponent,
    NewBoardAdminComponent,
    NewBoardModeratorComponent,
    NewBoardUserComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot(appRoutes),
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {



}


