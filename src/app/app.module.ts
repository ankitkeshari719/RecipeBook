import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app.route.module';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import { shoppingListReducer } from './shopping-list/store/shopping-list.reducers';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, 
    SharedModule,
    HttpClientModule,
    AuthModule,
    CoreModule,
    AppRoutingModule,
    StoreModule.forRoot({shoppingList: shoppingListReducer})    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
