import { redirect } from "next/navigation";

const exampleFetchUrl = "https://jsonplaceholder.typicode.com/todos/1";

const backend = {

	helloActionAsync: async () => {
		"use server";

		console.log("Performing call on backend...");

		// Perform an example fetch
		const result = await fetch(exampleFetchUrl)
		const json = await result.json();
		console.log(json);
	},

	parseFormAsync: async (data: FormData) => {
		"use server";

		console.log(`Received 'name' from form: ${data.get("name")}`);
		console.log(`Received 'number_category' from form: ${data.get("number_category")}`);

		redirect("/");
	},

}


export default backend;