import { redirect } from "next/navigation";
import { ExampleForm, StringKeyedObject } from "../shared/form_types";
import paths from "../shared/paths";


const EXAMPLE_FETCH_URL = "https://jsonplaceholder.typicode.com/todos/1" as const;


const sleepAsync = async (ms: number)  => {
	return new Promise(resolve => setTimeout(resolve, ms))
};


const fromFormData = <T extends StringKeyedObject>(formData: FormData): T => {
    let obj: StringKeyedObject = {};

    formData.forEach((value, key) => {
        if (obj[key] !== undefined) {
            // Handle fields that may have multiple values (like select-multiple or checkboxes)
            if (!Array.isArray(obj[key])) {
                obj[key] = [obj[key]];
            }
            obj[key].push(value);
        } else {
            obj[key] = value;
        }
    });

    return obj as T;
}


const backend = {

	helloActionAsync: async () => {
		"use server";

		console.log("Performing call on backend...");

		// Perform an example fetch
		await sleepAsync(500);
		const result = await fetch(EXAMPLE_FETCH_URL)
		const json = await result.json();
		console.log(json);
	},

	parseFormAsync: async (formData: FormData) => {
		"use server";

		console.log("Simulating form parsing...");
		await sleepAsync(500);
		const example = fromFormData<ExampleForm>(formData);
		console.log(`Received 'name' from form: ${example.name}`);
		console.log(`Received 'number_category' from form: ${example.number_category}`);

		redirect(paths.home);
	},

}

export default backend;


