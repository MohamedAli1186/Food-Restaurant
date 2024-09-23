import { RegisterComponent } from './register/register.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { BookTableComponent } from './book-table/book-table.component';
import { ContactComponent } from './contact/contact.component';
import { PagesComponent } from './pages/pages.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path:'main', component: MainComponent} ,
    {path:'menu', component: MenuComponent} ,
    {path:'book-table', component: BookTableComponent} ,
    {path:'contact', component: ContactComponent} ,
    {path:'pages', component: PagesComponent} ,
    {path:'about', component: AboutComponent} ,
    {path:'register', component: RegisterComponent} ,
    {path:'login', component: LoginComponent} ,
    { path: '**', redirectTo: '/main' },
];