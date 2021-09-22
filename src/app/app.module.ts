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
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
