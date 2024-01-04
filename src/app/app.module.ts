import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routes";
import { CartComponent } from "./cart/cart.component";



@NgModule({
  declarations: [

  ],
  imports: [

    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CartComponent,
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
