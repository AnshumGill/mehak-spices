import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { CarouselComponent } from "./home-content/carousel/carousel.component";
import { HomeContentComponent } from "./home-content/home-content.component";
import { FooterComponent } from "./footer/footer.component";
import { ProductsComponent } from "./products/products.component";
import { ProductListComponent } from "./products/product-list/product-list.component";
import { ProductDetailComponent } from "./products/product-detail/product-detail.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";

@NgModule({
	declarations: [
		AppComponent,
		NavComponent,
		CarouselComponent,
		HomeContentComponent,
		FooterComponent,
		ProductsComponent,
		ProductListComponent,
		ProductDetailComponent,
		AboutUsComponent,
		ContactUsComponent,
	],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
