import { ProductDetailComponent } from "./products/product-detail/product-detail.component";
import { ProductListComponent } from "./products/product-list/product-list.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeContentComponent } from "./home-content/home-content.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { ProductsComponent } from "./products/products.component";

const routes: Routes = [
	{ path: "", component: HomeContentComponent },
	{ path: "about-us", component: AboutUsComponent },
	{ path: "contact-us", component: ContactUsComponent },
	{
		path: "products",
		component: ProductsComponent,
		children: [
			{ path: "category/:category", component: ProductListComponent },
			{ path: "product/:id", component: ProductDetailComponent },
		],
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
