import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {AuthModule} from './components/auth/auth.module';
import {AppRoutingModule} from './app-routing.module';
import {UserService} from './services/user.service';
import {AuthenticationService} from './services/authentication.service';
import {HttpModule} from '@angular/http';
import { FormsModule }   from '@angular/forms';


@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        AuthModule,
        HttpModule,
        FormsModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        UserService,
        AuthenticationService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
