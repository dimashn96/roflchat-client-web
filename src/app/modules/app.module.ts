import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {HttpService} from '../services/http.service';

import {AppComponent} from '../components/app.component';
import {ConversationsComponent} from '../components/conversations-component/conversations.component';
import {UserComponent} from "../components/user-component/user.component";
import {UserInfoComponent} from "../components/user-info-component/user-info.component";
import {UserRegistrationComponent} from "../components/user-registration-component/user-registration.component";
import {UserAuthorizationComponent} from "../components/user-authorization-component/user-authorization.component";


const appRoutes: Routes = [
    {path: 'conversations', component: ConversationsComponent},
    {
        path: 'user',
        component: UserComponent,
        children: [
            {path: 'info', component: UserInfoComponent},
            {path: 'registration', component: UserRegistrationComponent},
            {path: 'authorization', component: UserAuthorizationComponent},
            {path: '**', redirectTo: 'info'}
        ]
    },
    {path: '**', redirectTo: 'conversations'}
];

@NgModule({
  declarations: [
      AppComponent,
      UserComponent,
      UserInfoComponent,
      UserRegistrationComponent,
      UserAuthorizationComponent,
      ConversationsComponent
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes),
      FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
