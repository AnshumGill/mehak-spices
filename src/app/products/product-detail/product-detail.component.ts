import { Product } from "./../products.model";
import { ProductService } from "./../products.service";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-product-detail",
	templateUrl: "./product-detail.component.html",
	styleUrls: ["./product-detail.component.css"],
	providers: [ProductService],
})
export class ProductDetailComponent implements OnInit {
	product: Product;
	constructor(private route: ActivatedRoute, private productService: ProductService) {}

	ngOnInit(): void {
		this.product = this.productService.getProductById(+this.route.snapshot.params["id"]);
	}
}
