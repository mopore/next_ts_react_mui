const exampleFetchUrl = "https://jsonplaceholder.typicode.com/todos/1";

const backend = {

	helloAction: async () => {
		"use server";

		console.log("Performing call on backend...");

		// Perform an example fetch
		const result = await fetch(exampleFetchUrl)
		const json = await result.json();
		console.log(json);
	}
}


export default backend;