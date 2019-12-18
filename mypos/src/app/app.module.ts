import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/authen/login/login.component';
import { RegisterComponent } from './components/authen/register/register.component';
import { StockHomeComponent } from './components/stock/stock-home/stock-home.component';
import { StockCreateComponent } from './components/stock/stock-create/stock-create.component';
import { StockEditComponent } from './components/stock/stock-edit/stock-edit.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { JwtInterceptor } from './services/jwt.interceptor';
import { ShopHomeComponent } from './components/shop/shop-home/shop-home.component';
import { ShopPaymentComponent } from './components/shop/shop-payment/shop-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    StockHomeComponent,
    StockCreateComponent,
    StockEditComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    ShopHomeComponent,
    ShopPaymentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
