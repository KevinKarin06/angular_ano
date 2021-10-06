import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { LinkComponent } from './components/link/link.component';
import { MessageComponent } from './components/message/message.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { MessageBodyComponent } from './components/message-body/message-body.component';
import { MessageListItemComponent } from './components/message-list-item/message-list-item.component';
import { ButtonComponent } from './components/button/button.component';
import { NewMessageComponent } from './components/new-message/new-message.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material/material.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { LogoComponent } from './components/logo/logo.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { ToastComponent } from './components/toast/toast.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AvatarComponent,
    LinkComponent,
    MessageComponent,
    MessageListComponent,
    MessageBodyComponent,
    MessageListItemComponent,
    ButtonComponent,
    NewMessageComponent,
    UserInfoComponent,
    LoginComponent,
    RegisterComponent,
    LogoComponent,
    HomeComponent,
    ToastComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
