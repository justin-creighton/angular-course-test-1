import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserListComponent } from './user-list/user-list.component';
import { ButtonComponent } from './button/button.component';
import { DangerButtonComponent } from './danger-button/danger-button.component';
import { SuccessButtonComponent } from './success-button/success-button.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListComponent,
    ButtonComponent,
    DangerButtonComponent,
    SuccessButtonComponent,
    LoginFormComponent,
    UserInfoComponent,
    NotFoundPageComponent,
    DashboardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
