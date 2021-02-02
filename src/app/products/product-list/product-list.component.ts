import { Component, OnInit } from "@angular/core";
import { Product } from "../products.model";
import { ActivatedRoute, Params } from "@angular/router";
import { ProductService } from "../products.service";

@Component({
	selector: "app-product-list",
	templateUrl: "./product-list.component.html",
	styleUrls: ["./product-list.component.css"],
	providers: [ProductService],
})
export class ProductListComponent implements OnInit {
	catId: string;
	products: Product[] = [];
	constructor(private productService: ProductService, private route: ActivatedRoute) {}

	ngOnInit() {
		const category = this.route.snapshot.params["category"];
		this.catId = category;
		this.route.params.subscribe((params: Params) => {
			this.catId = params["category"];
			this.products = this.productService.getProductByCategory(this.catId);
		});
	}
}
