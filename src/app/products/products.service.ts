import { Product } from "./products.model";
export class ProductService {
	products = [
		new Product(
			1,
			"Product 1",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et lectus in sapien vulputate pretium non laoreet nulla. Morbi rhoncus, mi vel ultricies posuere, tortor nisl luctus enim, vel consectetur neque felis rhoncus nibh. Vestibulum faucibus turpis sed risus dapibus efficitur.",
			"https://via.placeholder.com/300",
			["product", "one", "1"],
			"1"
		),
		new Product(
			2,
			"Product 2",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et lectus in sapien vulputate pretium non laoreet nulla. Morbi rhoncus, mi vel ultricies posuere, tortor nisl luctus enim, vel consectetur neque felis rhoncus nibh. Vestibulum faucibus turpis sed risus dapibus efficitur.",
			"https://via.placeholder.com/300",
			["product", "two", "2"],
			"2"
		),
		new Product(
			3,
			"Product 3",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et lectus in sapien vulputate pretium non laoreet nulla. Morbi rhoncus, mi vel ultricies posuere, tortor nisl luctus enim, vel consectetur neque felis rhoncus nibh. Vestibulum faucibus turpis sed risus dapibus efficitur.",
			"https://via.placeholder.com/300",
			["product", "three", "3"],
			"1"
		),
	];
	getProductById(id: number) {
		const product = this.products.find((product) => product.id == id);
		return product;
	}
	getProductByCategory(category: string) {
		const products = this.products.filter((product) => product.category == category);
		return products;
	}
}
