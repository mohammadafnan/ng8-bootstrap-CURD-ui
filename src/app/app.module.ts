import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { appRoutingModule, routedComponents } from './app.routing';
import { AgmCoreModule } from '@agm/core';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        appRoutingModule,
        AgmCoreModule.forRoot({
            apiKey: ''
        })
    ],
    declarations: [
        AppComponent,
        routedComponents
    ],
    providers: [
        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }