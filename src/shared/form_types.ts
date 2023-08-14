export interface StringKeyedObject {
	[key: string]: any;
}

export interface ExampleForm extends StringKeyedObject {
	name: string;
	number_category: number;
}