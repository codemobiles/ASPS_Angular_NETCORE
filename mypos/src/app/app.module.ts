import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/authen/login/login.component';
import { RegisterComponent } from './components/authen/register/register.component';
import { ShopHomeComponent } from './components/shop/shop-home/shop-home.component';
import { ShopCreateComponent } from './components/shop/shop-create/shop-create.component';
import { ShopEditComponent } from './components/shop/shop-edit/shop-edit.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ShopHomeComponent,
    ShopCreateComponent,
    ShopEditComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
