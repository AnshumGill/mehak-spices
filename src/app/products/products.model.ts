export class Product {
	public id: number;
	public name: string;
	public description: string;
	public imgPath: string;
	public tags: string[];
	public category: string;
	constructor(id: number, name: string, description: string, imgPath: string, tags: string[], category: string) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.imgPath = imgPath;
		this.tags = tags;
		this.category = category;
	}
}
