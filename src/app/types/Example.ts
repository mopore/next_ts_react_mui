export interface StringKeyedObject {
	[key: string]: any;
}

export interface Example extends StringKeyedObject {
	name: string;
	number_category: number;
}