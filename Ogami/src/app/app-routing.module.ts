import { BlogsComponent } from './features/blogs/blogs.component';
import { ComingsoonComponent } from './features/comingsoon/comingsoon.component';
import { FaqComponent } from './features/faq/faq.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { RegisterComponent } from './forms/register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './forms/login/login.component';
import { HomepageComponent } from './features/homepage/homepage.component';
import { ContactComponent } from './features/contact/contact.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'coming-soon', component: ComingsoonComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '404', component: PagenotfoundComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const routingComponents = [
  LoginComponent,
  RegisterComponent,
  HomepageComponent
];
