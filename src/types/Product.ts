export interface IProduct {
	id: string;
	name: string;
	title: string;
	description: string;
	price: number;
	image: string;
}

export interface IProductData {
	products: IProduct[];
}
